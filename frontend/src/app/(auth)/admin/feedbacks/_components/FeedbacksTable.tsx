"use client"

import { useEffect, useRef, useState } from "react"
import { Get, Post } from "@/libs/Fetch";
import Pagination from "@/app/_components/Paginations/Pagination";
import { useSearchParams } from "next/navigation";
import { SupportFormRequest } from "@/types/SupportFormRequest";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import StatusView from "@/app/(auth)/_components/StatusView";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import StatusChanger from "@/app/(auth)/_components/StatusChanger";
import { formatDate } from "@/utils/formatDate";

export default function FeedbacksTable({
    page,
}: {
    page: number,
}) {
    const searchParams = useSearchParams();
    const [feedbacks, setFeedbacks] = useState<SupportFormRequest[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);
    const perPageRef = useRef<number>(1);


    useEffect(() => {
        const sparams = new URLSearchParams(searchParams);

        // FIX: must to get entities in useEffect on client side. Otherwise it will cache on SSR.
        Get(`user/feedbacks/support-form-requests?${sparams.toString()}`)
            .then((feedbacksPaginate) => {
                if (feedbacksPaginate === false)
                    throw new Error("Запрос на хаки оборавался");


                perPageRef.current = feedbacksPaginate.per_page;
                setTotalPages(feedbacksPaginate.last_page);
                setFeedbacks(feedbacksPaginate.data); // user's Hacks
            });
    }, [page, searchParams]);


    return (
        <div className="grid gap-4">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[80px]">#</TableHead>
                        <TableHead className="w-[200px]">Тема</TableHead>
                        <TableHead className="w-[200px]">Контактный email</TableHead>
                        <TableHead>Текст</TableHead>
                        <TableHead className="w-[100px] text-right">Остальное</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {feedbacks.map((el, index) => (
                        <TableRow key={el.id}>
                            <TableCell>{el.id}</TableCell>
                            <TableCell>{el.subject}</TableCell>
                            <TableCell>{el.contact_email}</TableCell>
                            <TableCell>{el.text}</TableCell>

                            <TableCell >
                                <div className="flex flex-row gap-2 items-center justify-end">

                                    <StatusView status={el.status} />
                                    <FeedbackPopover
                                        feedback={el}
                                        updateFeedback={(updatedFeedback: SupportFormRequest) => {
                                            feedbacks[index] = updatedFeedback;
                                            setFeedbacks([...feedbacks]);
                                        }}
                                    />
                                </div>

                            </TableCell>
                        </TableRow>
                    ))
                    }
                </TableBody>
            </Table>


            {totalPages > 1 &&
                <Pagination totalPages={totalPages} />
            }
        </div>
    )
}


function FeedbackPopover({
    feedback,
    updateFeedback
}: {
    feedback: SupportFormRequest
    updateFeedback: (updatedFeedback: SupportFormRequest) => void
}) {
    const cahngeStatus = async (newStatus: number) => Post(`user/feedbacks/support-form-requests/${feedback.id}`, { ...feedback, status: newStatus });


    return (
        <div>
            <Popover>
                <PopoverTrigger render={
                    <Button variant="outline">
                        <Settings />
                    </Button>
                }>
                </PopoverTrigger>
                <PopoverContent className="w-70">
                    <div className="grid gap-4">
                        <div className="space-y-2">
                            <h4 className="leading-none font-medium">Настройки</h4>
                        </div>
                        <div className="grid gap-2">
                            <div>
                                <StatusChanger
                                    status={feedback.status}
                                    changeRequest={cahngeStatus}
                                    onChanged={(newStatus: number) => updateFeedback({ ...feedback, status: newStatus })}
                                />
                            </div>

                            <div>{`user_id: ${feedback.user_id}`}</div>
                            <div>{`Согласие на использование данных: ${feedback.using_personal_data}`}</div>
                            <div>{formatDate(feedback.created_at)}</div>
                            <div>{formatDate(feedback.updated_at)}</div>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}