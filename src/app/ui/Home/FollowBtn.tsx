"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
function FollowBtn({ isFollow }: { isFollow: boolean }) {
    const [follow, setFollowed] = useState<Boolean>(isFollow);
    const onClickHandler = () => {
        setFollowed(!follow);
    };
    return (
        <>
            {" "}
            {follow ? (
                <AlertDialog>
                    <Button>
                        <AlertDialogTrigger className="text-blue-300 font-bold flex justify-center items-center gap-4">
                            <FaPlus /> Unfollow
                        </AlertDialogTrigger>
                    </Button>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle className="text-black">
                                Are you sure to unfollow?
                            </AlertDialogTitle>
                            {/* <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently delete your account and remove your
                                data from our servers.
                            </AlertDialogDescription> */}
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel className="text-black">
                                Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction onClick={onClickHandler}>
                                Continue
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            ) : (
                <Button
                    className="text-blue-300 font-bold flex justify-center items-center gap-2 cursor-pointer"
                    onClick={onClickHandler}
                >
                    {" "}
                    <FaPlus /> Follow
                </Button>
            )}
        </>
    );
}

export default FollowBtn;
