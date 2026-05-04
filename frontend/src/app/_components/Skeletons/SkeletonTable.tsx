import { Skeleton } from "./Skeleton";

export const SkeletonTable = ({
    className,
    rows = 2,
    cols = 2,
    height = "min-h-8",
}: {
    className?: string
    rows?: number
    cols?: number
    height?: string

}) => (
    <div className={` ${className}`}>
        <table className="w-full">
            <tbody>
                {Array.from({ length: rows }, (v, i) => i).fill(1).map((el, rowIndex) => (
                    <tr key={rowIndex} >
                        {Array.from({ length: cols }, (v, i) => i).map((el, index) => (
                            <td key={index}
                                className="px-2 py-1"
                            >
                                <Skeleton className={`${height} rounded-xl`} />
                            </td>
                        ))}
                    </tr>
                ))
                }
            </tbody>
        </table>
    </div>
);