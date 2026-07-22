"use client"

import ContextUser from "@/context/ContextUser";
import { User } from "@/types/User";
import { deleteCookie } from "@/utils/deleteCookie";
import getCookie from "@/utils/getCookie";
import getUser from "@/utils/getUser";
import React, { useContext, useEffect } from "react";
import refreshUserToken from "./refreshUserToken";
import setCookie from "@/utils/setCookie";

const UserInitiator = React.memo(() => {
    const { stateUser, dispatchUser } = useContext(ContextUser);


    // ==== checking access_token in cookies
    useEffect(() => {
        if (stateUser.authentication_status == "unauthorized" || stateUser.authentication_status == "authorized")
            return;
        
        getCookie('access_token').then((token) => {
            if (typeof token === 'string') {
                getUser().then((user: User | null) => {
                    
                    if (user !== null) {
                        dispatchUser({
                            type: 'SET',
                            authentication_status: "authorized",
                            user: user,
                        });
                    } else {
                        // can't get the User by token
                        dispatchUser({
                            type: 'SET',
                            authentication_status: "unauthorized",
                            user: null,
                        });

                        // TODO: продумать что-то с системой стирания кук
                        deleteCookie('access_token');
                        deleteCookie('refresh_token');
                        deleteCookie('access_token_expires_in');
                    }
                });

            } else {
                // no token
                dispatchUser({
                    type: 'SET',
                    authentication_status: "unauthorized",
                    user: null,
                });
            }
        })
    }, [stateUser.authentication_status ,dispatchUser]);
    // ---- checking access_token in cookies


    useEffect(()=>{
        // нужно раз в 5 минут проверять токен на необходимость обновления.
        if (stateUser.authentication_status == "can_authorize" || stateUser.authentication_status == "authorized"){
            const interval = setInterval(async ()=>{
                const access_token_expires_in = Number(await getCookie("access_token_expires_in"));

                // за 10 минут до просрочки меняем коды
                const window = 600000;
                if (Date.now() + window > access_token_expires_in){
                    const responseTokens = await refreshUserToken();

                    setCookie('access_token', responseTokens.access_token);
                    setCookie('refresh_token', responseTokens.refresh_token);
                    setCookie('access_token_expires_in', String(Date.now() + responseTokens.expires_in * 1000));
                }
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [dispatchUser, stateUser])


    return null; // need only functional part
})


UserInitiator.displayName = "ParticlesWrapper";

export default UserInitiator;