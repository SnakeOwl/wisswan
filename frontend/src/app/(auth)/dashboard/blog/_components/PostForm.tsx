"use client"

import Lexical from "@/app/_components/TextEditors/Lexical";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Post } from "@/types/Blog"
import { useContext, useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import StatusView from "@/app/(auth)/_components/StatusView";
import updatePostRequest from "./updatePostRequest";
import { toast } from "@/components/ui/toast";
import ContextUser from "@/context/ContextUser";
import { isAdmin } from "@/types/User";
import StatusChanger from "@/app/(auth)/_components/StatusChanger";
import { getClientMeta } from "@/utils/getClientMeta";
import { getClientMetaServer } from "@/utils/getClientMetaServer";
import DomainsSelectorWrapper from "./DomainsSelectorWrapper";
import { Domain } from "@/types/Domain";
import syncPostDomains from "./syncPostDomains";


const defaultBlogData = {}


export default function PostForm({
    initialData
}: {
    initialData?: Post
}) {
    const { stateUser } = useContext(ContextUser);
    const [post, setPost] = useState<Post | Record<string, string>>(initialData || defaultBlogData);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [syncDomainsDisabled, setSyncDomainsDisabled] = useState<boolean>(false);


    const updatePost = async (newPost: any = post) => {
        setPost(newPost);

        // не отправлять форму, если нет необходимых строк
        if (typeof newPost.title == "string" && newPost.title.length > 0
            && typeof newPost.short_description == "string" && newPost.short_description.length > 0
            && typeof newPost.content == "string" && newPost.content.length > 0
        ) {
            const metadata = getClientMeta();
            const serverMeta = await getClientMetaServer();
            const response = await updatePostRequest({ ...newPost, ...metadata, ...serverMeta }) as any;


            if (response.errors) {
                setErrors(response.errors);
            } else {
                setErrors({});


                if (initialData == undefined && typeof response.id == "number") {
                    // == сущность была создана
                    setPost(response);

                    toast.add({
                        title: "Статья создана",
                        description: "Можете редактировать её прямо тут! Данные сохраняются по мере их изменений.",
                        type: "success"
                    });
                }
            }
        }
    }


    const syncDomains = async (domains: (Domain | string)[]) => {
        setSyncDomainsDisabled(true);
        const response = await syncPostDomains(post.id as number, domains);
        if (response !== null) {
            setPost({...post, domains: response} as any)
            setSyncDomainsDisabled(false);
        }
    }



    return (
        <div className="grid grid-cols-5 gap-4">
            <div className="col-span-4">
                <Lexical
                    onBlur={content => updatePost({ ...post, content: content })}
                    initialEditorState={post.content}
                />
            </div>


            <div className="flex flex-col col-span-1 gap-2 min-w-[300px]">
                <Field data-invalid={!!errors.title}>
                    <FieldLabel htmlFor="title">Заголовок*</FieldLabel>

                    <Input id="title"
                        type="text"
                        value={post.title || ""}
                        onChange={e => setPost({ ...post, title: e.target.value })}
                        onBlur={() => updatePost()}
                        maxLength={255}
                        minLength={8}
                        aria-invalid={!!errors.title}
                    />

                    {!!errors.title &&
                        <FieldDescription className="text-red">
                            {errors.title}
                        </FieldDescription>
                    }
                </Field>

                <Field data-invalid={!!errors.short_description}>
                    <FieldLabel htmlFor="short_description">Краткое описание*</FieldLabel>

                    <Textarea id="short_description"
                        value={post.short_description || ""}
                        onChange={e => setPost({ ...post, short_description: e.target.value })}
                        onBlur={() => updatePost()}
                        maxLength={255}
                        minLength={16}
                        rows={4}
                        aria-invalid={!!errors.short_description}
                    />

                    {!!errors.short_description &&
                        <FieldDescription className="text-red">
                            {errors.short_description}
                        </FieldDescription>
                    }
                </Field>

                <div className="flex flex-row gap-2 items-center p-2 border rounded">
                    Статус: <StatusView status={post.status as number || 0} />
                </div>

                <Button onClick={() => updatePost({ ...post, status: 110 })} >Опубликовать</Button>

                <div>
                    <DomainsSelectorWrapper
                        selectedDomains={post.domains as Domain[] | undefined}
                        syncDomains={syncDomains}
                        disabled={post.id != undefined && !syncDomainsDisabled}
                    />
                </div>

                {isAdmin(stateUser.user) && !!post.id && (
                    <div className="flex flex-col gap-3 my-4">
                        <hr />
                        <h4>Настройки админа</h4>
                        <StatusChanger
                            status={post.status as number}
                            changeRequest={(newStatus: number) => updatePost({ ...post, status: newStatus })}
                            onChanged={(newStatus: number) => updatePost({ ...post, status: newStatus })}
                        />
                        <hr />
                    </div>
                )
                }
            </div>
        </div>
    )
}