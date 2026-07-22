<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Grants\EmailCodeGrant;
use Laravel\Passport\Bridge\RefreshTokenRepository;
use Laravel\Passport\Bridge\UserRepository;
use Laravel\Passport\Passport;
use League\OAuth2\Server\AuthorizationServer;
use Carbon\CarbonInterval;


class AuthServiceProvider extends ServiceProvider
{
    protected function registerEmailCodeGrant()
    {
        /** @var AuthorizationServer $server */
        $server = app(AuthorizationServer::class);

        $grant = new EmailCodeGrant(
            app(UserRepository::class),
            app(RefreshTokenRepository::class)
        );

        $server->enableGrantType($grant, Passport::tokensExpireIn());
    }

    /**
     * Register services.
     */
    public function register(): void
    {
        Passport::ignoreRoutes(); // отменяю дефолтные маршруты Laravel:passport

    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->registerEmailCodeGrant(); // сначала регистрация гранта

        Passport::tokensExpireIn(CarbonInterval::minutes(60));
        Passport::refreshTokensExpireIn(CarbonInterval::days(30));
        Passport::personalAccessTokensExpireIn(CarbonInterval::months(6));
    }
}
