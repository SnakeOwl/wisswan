<?php

namespace App\Grants;

use App\Models\User;
use App\Models\UserLoginCode;
use DateInterval;
use Illuminate\Support\Facades\Log;
use League\OAuth2\Server\Exception\OAuthServerException;
use League\OAuth2\Server\Grant\AbstractGrant;
use League\OAuth2\Server\Repositories\RefreshTokenRepositoryInterface;
use League\OAuth2\Server\Repositories\UserRepositoryInterface;
use League\OAuth2\Server\ResponseTypes\ResponseTypeInterface;
use Psr\Http\Message\ServerRequestInterface;
use Laravel\Passport\Bridge\User as PassportUser;


class EmailCodeGrant extends AbstractGrant
{
    public function __construct(
        UserRepositoryInterface $userRepository,
        RefreshTokenRepositoryInterface $refreshTokenRepository
    ) {
        $this->userRepository = $userRepository;
        $this->setUserRepository($userRepository);
        $this->setRefreshTokenRepository($refreshTokenRepository);
        $this->refreshTokenTTL = new DateInterval('P1M'); // 1 месяц
    }

    public function getIdentifier(): string
    {
        return 'email_code';
    }

    /**
     * Основной метод, обрабатывающий запрос на получение токена.
     * Сигнатура строго соответствует интерфейсу GrantTypeInterface.
     */
    public function respondToAccessTokenRequest(
        ServerRequestInterface $request,
        ResponseTypeInterface $responseType,
        DateInterval $accessTokenTTL
    ): ResponseTypeInterface {

        // Проверяем клиента (client_id и client_secret)
        $client = $this->validateClient($request);

        $email = $this->getRequestParameter('email', $request);
        $code = $this->getRequestParameter('code', $request);

        if ($email === null || $code === null) 
            throw OAuthServerException::invalidRequest('email or code');
        
        $user = User::where('email', $email)->first();
        if (!$user)
            throw OAuthServerException::invalidRequest('email', 'Пользователь не найден');

        $loginCode = UserLoginCode::where('user_id', $user->id)
            ->where('code', $code)
            ->where('expires_at', '>=', now()->utc()->toDateTimeString())
            ->first();

        if (!$loginCode)
            throw OAuthServerException::invalidRequest('code', 'Неверный код');


        $loginCode->delete();

        // подтверждение почты
        if (is_null($user->email_verified_at)) {
            $user->email_verified_at = now();
            $user->save();
        }

        // пользователь для OAuth2
        $userEntity = new PassportUser($user->id);

        $scopes = $this->validateScopes(
            $this->getRequestParameter('scope', $request, '')
        );
        $finalizedScopes = $this->scopeRepository->finalizeScopes(
            $scopes,
            $this->getIdentifier(),
            $client,
            $userEntity->getIdentifier()
        );


        $accessToken = $this->issueAccessToken(
            $accessTokenTTL,
            $client,
            $userEntity->getIdentifier(),
            $finalizedScopes
        );

        $refreshToken = $this->issueRefreshToken($accessToken);

        $responseType->setAccessToken($accessToken);
        $responseType->setRefreshToken($refreshToken);

        return $responseType;
    }
}