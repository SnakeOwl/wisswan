
import { MagneticButton } from "@/components/ui/magnetic-button";
import getCookie from "@/utils/getCookie";
import setCookie from "@/utils/setCookie";


export default async function CookiesAgreement() {

    const buttonClick = async () => {
        "use server"

        await setCookie('CookiesAgreement', '1')
    }

    const CookiesAgreement = await getCookie('CookiesAgreement');

    if (CookiesAgreement != null)
        // Соглашение получено
        return null;



    return (
        <div className="fixed z-50 bottom-0 left-0 max-w-fit md:max-w-md px-2 pb-2 ">
            <div className="bg-neutral-800 flex rounded-lg text-white  items-center p-4 gap-2">

                <p>Мы&nbsp;используем файлы cookies, потому что без них не&nbsp;работаем.</p>

                <MagneticButton>
                    <button
                        onClick={buttonClick}
                        className="cursor-pointer rounded-lg bg-white px-4 py-2 font-medium text-neutral-950 ring-1 ring-white/20 ring-offset-1 ring-offset-sky-100 transition-transform duration-150 ring-inset active:scale-98"
                    >
                        Хорошо
                    </button>
                </MagneticButton>
            </div>
        </div>
    )
}