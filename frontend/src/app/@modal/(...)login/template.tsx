'use client'

import { usePathname } from 'next/navigation'
import { useContext } from 'react';
import ModalWrapper from './_components/ModalWrapper';
import ContextUser from '@/context/ContextUser';

export default function Template({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    const { stateUser } = useContext(ContextUser);

    const showModal = pathname.includes('/login')


    if (stateUser.authentication_status == "authorized" || showModal === false)
        return null;


    return (
        <ModalWrapper>
            <div className='px-1'>
                {children}
            </div>
        </ModalWrapper>
    )
}