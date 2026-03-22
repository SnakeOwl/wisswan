<?php

namespace App\Http\Controllers\User\Hacks;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\Hacks\AccessHackRequest;
use App\Http\Requests\User\Hacks\CreateHackRequest;
use App\Http\Requests\User\Hacks\ManageDomainsHackRequest;
use App\Http\Requests\User\Hacks\UpdateAnonymHackRequest;
use App\Http\Requests\User\Hacks\UpdateHackRequest;
use App\Models\Domain;
use App\Models\Hack;
use Illuminate\Http\Request;

class HacksController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $show_all_records = $request->has('show_all_records') && $user->isAdmin();
        $filter_domains = $request->has('domains') ? $request->get('domains') : null;
        $order_by_new = $request->has('order_new'); // пока только либо новые, либо популярные

        // here hacks only for auth User;
        // OR all records for admin
        $hacks = $show_all_records ? Hack::query() : $user->hacks();


        if ($filter_domains != null) {
            $domains_ids = Domain::whereIn('id', $filter_domains)
                ->OrWhere(function ($query) use ($filter_domains) {
                    $query->whereIn('alias', $filter_domains);
                })
                ->pluck('id');


            foreach ($domains_ids as $domainId) {
                $hacks->whereHas('domains', function ($query) use ($domainId) {
                    $query->where('domains.id', $domainId);
                });
            }
        }


        if (!$order_by_new) {
            $hacks->orderByDesc('rating');
        }


        return $hacks
            ->orderByDesc('id')
            ->paginate(50);
    }


    public function show(AccessHackRequest $request, Hack $hack)
    {
        return $hack;
    }


    public function store(CreateHackRequest $request)
    {
        $params = $request->validated();
        $user = $request->user();

        $hack = $user->hacks()->create($params)->refresh();

        return $hack;
    }


    public function update(UpdateHackRequest $request, Hack $hack)
    {
        $params = $request->validated();

        $hack->update($params);

        return $hack;
    }


    public function destroy(AccessHackRequest $request, Hack $hack)
    {
        return $hack->delete();
    }



    public function increment_rating(Hack $hack)
    {
        return $hack->rating_plus();
    }


    public function sync_domains(ManageDomainsHackRequest $request, Hack $hack)
    {
        $validated = $request->validated();

        $ids_to_sync = [];
        $new_domains = []; // new - because on frontend we have all used domains

        $domains = $validated['domains'];

        // TODO REFACTORING: Перенести логику синхронизации доменов в модель.

        if (!is_null($domains)) {
            foreach ($domains as $domain) {
                // if $domain not have id, than create;
                if (isset($domain['id'])) {
                    $ids_to_sync[] = $domain['id'];
                    continue;
                }


                $new_domain = Domain::firstOrCreate(['name' => $domain['name']])->refresh();
                $ids_to_sync[] = $new_domain->id;
                $new_domains[] = $new_domain;
            }
        }

        $hack->domains()->sync($ids_to_sync);


        return ([
            'bounded' => $ids_to_sync,
            "new_domains" => $new_domains
        ]);
    }


    public function sync_domains_anonymous_hack(ManageDomainsHackRequest $request, Hack $hack)
    {
        $validated = $request->validated();

        $ids_to_sync = [];
        $new_domains = []; // new - because on frontend we have all used domains

        $domains = $validated['domains'];


        if (!is_null($domains)) {
            foreach ($domains as $domain) {
                // if $domain not have id, than create;
                if (isset($domain['id'])) {
                    $ids_to_sync[] = $domain['id'];
                    continue;
                }


                $new_domain = Domain::firstOrCreate(['name' => $domain['name']])->refresh();
                $ids_to_sync[] = $new_domain->id;
                $new_domains[] = $new_domain;
            }
        }

        $hack->domains()->sync($ids_to_sync);


        return ([
            'bounded' => $ids_to_sync,
            "new_domains" => $new_domains
        ]);
    }


    public function anonym_form_suggestion(UpdateAnonymHackRequest $request)
    {
        $params = $request->validated();
        $updating_mode = isset($params['id']);
        $hack = null;

        if ($updating_mode) {
            $hack = Hack::find($params['id']);
            $hack->update($params);
        } else {
            $hack = Hack::create($params);
            $hack->refresh(); // need to get id from DB
        }

        return $hack;
    }
}
