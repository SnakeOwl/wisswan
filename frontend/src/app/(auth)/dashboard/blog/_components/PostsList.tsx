"use client"

import { Post } from "@/types/Blog"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import StatusView from "@/app/(auth)/_components/StatusView"
import { Bolt, CircleQuestionMark, OctagonX } from "lucide-react"
import Link from "next/link"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { formatDate } from "@/utils/formatDate";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useRouter } from "next/navigation"
import deletePostRequest from "./deletePostRequest"


type PostsList = {
    posts: Post[]
}


export default function PostsList({
    posts,
}: PostsList) {

    if (posts.length == 0)
        return null;

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Заголовок</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead className="text-right w-[100px]">Кнопки</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {posts.map((post, index) => (
                    <TableRow key={index}>
                        <TableCell>{post.title}</TableCell>
                        <TableCell><StatusView status={post.status} /> </TableCell>
                        <TableCell>
                            <div className="flex gap-2 items-center justify-end">
                                <PostDetailsPopover post={post} />

                                <Link href={`/dashboard/blog/${post.id}`} prefetch={false}
                                    className="link-hover hover:animate-spin"
                                >
                                    <Bolt />
                                </Link>

                                <DeleteButton postId={post.id} />
                            </div>
                        </TableCell>
                    </TableRow>
                ))
                }
            </TableBody>
        </Table>
    )
}


const PostDetailsPopover = ({ post }: { post: Post }) => (
    <HoverCard>
        <HoverCardTrigger><CircleQuestionMark className={"hover:cursor-pointer"} /></HoverCardTrigger>
        <HoverCardContent>
            <div className="grid gap-4">
                <div className="space-y-2">
                    <h4 className="leading-none">Сведения</h4>
                </div>
                <div className="grid gap-2">
                    <div>{`#: ${post.id}`}</div>
                    <div>{post.published_at ? `Опубликован: ${formatDate(post.published_at)}` : "Не опубликован"}</div>
                    <div>{`Создан: ${formatDate(post.created_at, true)}`}</div>
                    <div>{`Обновлён: ${formatDate(post.updated_at, true)}`}</div>
                    <div>{`editor_ip: ${post.editor_ip}`}</div>
                    <div>{`device_type: ${post.device_type}`}</div>
                    <div>{`browser_name: ${post.browser_name}`}</div>
                    <div>{`os_name: ${post.os_name}`}</div>
                    <div>{`screen_resolution: ${post.screen_resolution}`}</div>
                </div>
            </div>
        </HoverCardContent>
    </HoverCard>
)

const DeleteButton = ({
    postId
}: {
    postId: number
}) => {
    const router = useRouter();

    const onDelete = async () => {
        if(await deletePostRequest(postId) === true){
            router.refresh();
        }
    }

    return (
        <Button variant={"destructive"}
            className={"hover:cursor-pointer"}
            tabIndex={-1}
            render={<Dialog>
                <DialogTrigger ><OctagonX className="text-red-500 cursor-pointer" /></DialogTrigger>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Удалить статью?</DialogTitle>
                        <DialogDescription>
                            Кнопки "восстановить" не будет.
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter>
                        <div className="w-full flex flex-row gap-2 justify-between">
                            <Button variant={"destructive"} 
                                onClick={onDelete}
                            >Удалить</Button>

                            <DialogClose render={<Button type="button">Отменить</Button>} />
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>}
        >
        </Button>
    )
}