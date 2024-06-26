"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { getUserData, handleSignOut } from "./actions";
import { useToast } from "../ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

export default function Profile() {
  const [userData, setUserData] = useState<User>();

  const { toast } = useToast();

  async function getUser() {
    const data = await getUserData();
    if (data.error) {
      toast({
        title: "An error occured.",
        description: data.error.message,
        variant: "destructive",
      });
    }
    if (data.data.user !== null) {
      setUserData(data.data.user);
    }
  }

  async function onSignOutClick() {
    const error = await handleSignOut();

    if (error) {
      toast({
        title: "An error occured.",
        description: error.message,
        variant: "destructive",
      });
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  console.log(userData);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* <Button
          size="icon"
          className="flex items-center justify-center overflow-hidden rounded-full"
        >
          {userData?.user_metadata?.name || "Mac"}
        </Button> */}
        <Avatar className="flex items-center justify-center text-center">
          <AvatarImage src={userData?.user_metadata?.avatar_url} />

          <AvatarFallback>
            {userData?.user_metadata?.name || "Mac"}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onSignOutClick}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}