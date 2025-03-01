"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Message } from "@/types";

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hey, how are you?",
      isUser: false,
      time: "10:30 AM",
    },
    {
      text: "I'm good, thanks!",
      isUser: true,
      time: "10:31 AM",
    },
    {
      text: "What have you been up to lately?",
      isUser: false,
      time: "10:32 AM",
    },
    {
      text: "Not much, just working.",
      isUser: true,
      time: "10:33 AM",
    },
    {
      text: "Do you have any plans for the weekend?",
      isUser: false,
      time: "10:34 AM",
    },
    {
      text: "I have a few plans this weekend.",
      isUser: true,
      time: "10:35 AM",
    },
    {
      text: "That's interesting, tell me more.",
      isUser: false,
      time: "10:36 AM",
    },
    {
      text: "Sure, I'd love to share more.",
      isUser: true,
      time: "10:37 AM",
    },
    {
      text: "I see, how do you feel about that?",
      isUser: false,
      time: "10:38 AM",
    },
    {
      text: "I think it's quite fascinating.",
      isUser: true,
      time: "10:39 AM",
    },
    {
      text: "Really? That's amazing!",
      isUser: false,
      time: "10:40 AM",
    },
    {
      text: "Absolutely, that sounds great.",
      isUser: true,
      time: "10:41 AM",
    },
    {
      text: "Can you elaborate on that?",
      isUser: false,
      time: "10:42 AM",
    },
    {
      text: "I'm not sure, but I'll check.",
      isUser: true,
      time: "10:43 AM",
    },
    {
      text: "What do you think about the current trends?",
      isUser: false,
      time: "10:44 AM",
    },
    {
      text: "That makes sense to me.",
      isUser: true,
      time: "10:45 AM",
    },
    {
      text: "Let's catch up soon.",
      isUser: false,
      time: "10:46 AM",
    },
    {
      text: "I'll get back to you on that.",
      isUser: true,
      time: "10:47 AM",
    },
    {
      text: "Have you seen the latest news?",
      isUser: false,
      time: "10:48 AM",
    },
    {
      text: "I agree with you.",
      isUser: true,
      time: "10:49 AM",
    },
    {
      text: "I was wondering if you could help me with something.",
      isUser: false,
      time: "10:50 AM",
    },
    {
      text: "Yes, I can help with that.",
      isUser: true,
      time: "10:51 AM",
    },
    {
      text: "What is your favorite hobby?",
      isUser: false,
      time: "10:52 AM",
    },
    {
      text: "My favorite hobby is reading.",
      isUser: true,
      time: "10:53 AM",
    },
    {
      text: "I'm really enjoying our conversation.",
      isUser: false,
      time: "10:54 AM",
    },
    {
      text: "I'm enjoying our chat as well.",
      isUser: true,
      time: "10:55 AM",
    },
    {
      text: "Could you share more details?",
      isUser: false,
      time: "10:56 AM",
    },
    {
      text: "Could you tell me more?",
      isUser: true,
      time: "10:57 AM",
    },
    {
      text: "That sounds exciting!",
      isUser: false,
      time: "10:58 AM",
    },
    {
      text: "That's really cool.",
      isUser: true,
      time: "10:59 AM",
    },
    {
      text: "I appreciate your insights.",
      isUser: false,
      time: "11:00 AM",
    },
    {
      text: "Thank you for asking.",
      isUser: true,
      time: "11:01 AM",
    },
    {
      text: "Hey, how are you?",
      isUser: false,
      time: "11:02 AM",
    },
    {
      text: "I'm good, thanks!",
      isUser: true,
      time: "11:03 AM",
    },
    {
      text: "What have you been up to lately?",
      isUser: false,
      time: "11:04 AM",
    },
    {
      text: "Not much, just working.",
      isUser: true,
      time: "11:05 AM",
    },
    {
      text: "Do you have any plans for the weekend?",
      isUser: false,
      time: "11:06 AM",
    },
    {
      text: "I have a few plans this weekend.",
      isUser: true,
      time: "11:07 AM",
    },
    {
      text: "That's interesting, tell me more.",
      isUser: false,
      time: "11:08 AM",
    },
    {
      text: "Sure, I'd love to share more.",
      isUser: true,
      time: "11:09 AM",
    },
    {
      text: "I see, how do you feel about that?",
      isUser: false,
      time: "11:10 AM",
    },
    {
      text: "I think it's quite fascinating.",
      isUser: true,
      time: "11:11 AM",
    },
    {
      text: "Really? That's amazing!",
      isUser: false,
      time: "11:12 AM",
    },
    {
      text: "Absolutely, that sounds great.",
      isUser: true,
      time: "11:13 AM",
    },
    {
      text: "Can you elaborate on that?",
      isUser: false,
      time: "11:14 AM",
    },
    {
      text: "I'm not sure, but I'll check.",
      isUser: true,
      time: "11:15 AM",
    },
    {
      text: "What do you think about the current trends?",
      isUser: false,
      time: "11:16 AM",
    },
    {
      text: "That makes sense to me.",
      isUser: true,
      time: "11:17 AM",
    },
    {
      text: "Let's catch up soon.",
      isUser: false,
      time: "11:18 AM",
    },
    {
      text: "I'll get back to you on that.",
      isUser: true,
      time: "11:19 AM",
    },
    {
      text: "Have you seen the latest news?",
      isUser: false,
      time: "11:20 AM",
    },
    {
      text: "I agree with you.",
      isUser: true,
      time: "11:21 AM",
    },
    {
      text: "I was wondering if you could help me with something.",
      isUser: false,
      time: "11:22 AM",
    },
    {
      text: "Yes, I can help with that.",
      isUser: true,
      time: "11:23 AM",
    },
    {
      text: "What is your favorite hobby?",
      isUser: false,
      time: "11:24 AM",
    },
    {
      text: "My favorite hobby is reading.",
      isUser: true,
      time: "11:25 AM",
    },
    {
      text: "I'm really enjoying our conversation.",
      isUser: false,
      time: "11:26 AM",
    },
    {
      text: "I'm enjoying our chat as well.",
      isUser: true,
      time: "11:27 AM",
    },
    {
      text: "Could you share more details?",
      isUser: false,
      time: "11:28 AM",
    },
    {
      text: "Could you tell me more?",
      isUser: true,
      time: "11:29 AM",
    },
    {
      text: "That sounds exciting!",
      isUser: false,
      time: "11:30 AM",
    },
    {
      text: "That's really cool.",
      isUser: true,
      time: "11:31 AM",
    },
    {
      text: "I appreciate your insights.",
      isUser: false,
      time: "11:32 AM",
    },
    {
      text: "Thank you for asking.",
      isUser: true,
      time: "11:33 AM",
    },
    {
      text: "Hey, how are you?",
      isUser: false,
      time: "11:34 AM",
    },
    {
      text: "I'm good, thanks!",
      isUser: true,
      time: "11:35 AM",
    },
    {
      text: "What have you been up to lately?",
      isUser: false,
      time: "11:36 AM",
    },
    {
      text: "Not much, just working.",
      isUser: true,
      time: "11:37 AM",
    },
    {
      text: "Do you have any plans for the weekend?",
      isUser: false,
      time: "11:38 AM",
    },
    {
      text: "I have a few plans this weekend.",
      isUser: true,
      time: "11:39 AM",
    },
    {
      text: "That's interesting, tell me more.",
      isUser: false,
      time: "11:40 AM",
    },
    {
      text: "Sure, I'd love to share more.",
      isUser: true,
      time: "11:41 AM",
    },
    {
      text: "I see, how do you feel about that?",
      isUser: false,
      time: "11:42 AM",
    },
    {
      text: "I think it's quite fascinating.",
      isUser: true,
      time: "11:43 AM",
    },
    {
      text: "Really? That's amazing!",
      isUser: false,
      time: "11:44 AM",
    },
    {
      text: "Absolutely, that sounds great.",
      isUser: true,
      time: "11:45 AM",
    },
    {
      text: "Can you elaborate on that?",
      isUser: false,
      time: "11:46 AM",
    },
    {
      text: "I'm not sure, but I'll check.",
      isUser: true,
      time: "11:47 AM",
    },
    {
      text: "What do you think about the current trends?",
      isUser: false,
      time: "11:48 AM",
    },
    {
      text: "That makes sense to me.",
      isUser: true,
      time: "11:49 AM",
    },
    {
      text: "Let's catch up soon.",
      isUser: false,
      time: "11:50 AM",
    },
    {
      text: "I'll get back to you on that.",
      isUser: true,
      time: "11:51 AM",
    },
    {
      text: "Have you seen the latest news?",
      isUser: false,
      time: "11:52 AM",
    },
    {
      text: "I agree with you.",
      isUser: true,
      time: "11:53 AM",
    },
    {
      text: "I was wondering if you could help me with something.",
      isUser: false,
      time: "11:54 AM",
    },
    {
      text: "Yes, I can help with that.",
      isUser: true,
      time: "11:55 AM",
    },
    {
      text: "What is your favorite hobby?",
      isUser: false,
      time: "11:56 AM",
    },
    {
      text: "My favorite hobby is reading.",
      isUser: true,
      time: "11:57 AM",
    },
    {
      text: "I'm really enjoying our conversation.",
      isUser: false,
      time: "11:58 AM",
    },
    {
      text: "I'm enjoying our chat as well.",
      isUser: true,
      time: "11:59 AM",
    },
    {
      text: "Could you share more details?",
      isUser: false,
      time: "12:00 PM",
    },
    {
      text: "Could you tell me more?",
      isUser: true,
      time: "12:01 PM",
    },
    {
      text: "That sounds exciting!",
      isUser: false,
      time: "12:02 PM",
    },
    {
      text: "That's really cool.",
      isUser: true,
      time: "12:03 PM",
    },
    {
      text: "I appreciate your insights.",
      isUser: false,
      time: "12:04 PM",
    },
    {
      text: "Thank you for asking.",
      isUser: true,
      time: "12:05 PM",
    },
    {
      text: "Hey, how are you?",
      isUser: false,
      time: "12:06 PM",
    },
    {
      text: "I'm good, thanks!",
      isUser: true,
      time: "12:07 PM",
    },
    {
      text: "What have you been up to lately?",
      isUser: false,
      time: "12:08 PM",
    },
    {
      text: "Not much, just working.",
      isUser: true,
      time: "12:09 PM",
    },
    {
      text: "Do you have any plans for the weekend?",
      isUser: false,
      time: "12:10 PM",
    },
    {
      text: "I have a few plans this weekend.",
      isUser: true,
      time: "12:11 PM",
    },
    {
      text: "That's interesting, tell me more.",
      isUser: false,
      time: "12:12 PM",
    },
    {
      text: "Sure, I'd love to share more.",
      isUser: true,
      time: "12:13 PM",
    },
    {
      text: "I see, how do you feel about that?",
      isUser: false,
      time: "12:14 PM",
    },
    {
      text: "I think it's quite fascinating.",
      isUser: true,
      time: "12:15 PM",
    },
    {
      text: "Really? That's amazing!",
      isUser: false,
      time: "12:16 PM",
    },
    {
      text: "Absolutely, that sounds great.",
      isUser: true,
      time: "12:17 PM",
    },
    {
      text: "Can you elaborate on that?",
      isUser: false,
      time: "12:18 PM",
    },
    {
      text: "I'm not sure, but I'll check.",
      isUser: true,
      time: "12:19 PM",
    },
    {
      text: "What do you think about the current trends?",
      isUser: false,
      time: "12:20 PM",
    },
    {
      text: "That makes sense to me.",
      isUser: true,
      time: "12:21 PM",
    },
    {
      text: "Let's catch up soon.",
      isUser: false,
      time: "12:22 PM",
    },
    {
      text: "I'll get back to you on that.",
      isUser: true,
      time: "12:23 PM",
    },
    {
      text: "Have you seen the latest news?",
      isUser: false,
      time: "12:24 PM",
    },
    {
      text: "I agree with you.",
      isUser: true,
      time: "12:25 PM",
    },
    {
      text: "I was wondering if you could help me with something.",
      isUser: false,
      time: "12:26 PM",
    },
    {
      text: "Yes, I can help with that.",
      isUser: true,
      time: "12:27 PM",
    },
    {
      text: "What is your favorite hobby?",
      isUser: false,
      time: "12:28 PM",
    },
    {
      text: "My favorite hobby is reading.",
      isUser: true,
      time: "12:29 PM",
    },
    {
      text: "I'm really enjoying our conversation.",
      isUser: false,
      time: "12:30 PM",
    },
    {
      text: "I'm enjoying our chat as well.",
      isUser: true,
      time: "12:31 PM",
    },
    {
      text: "Could you share more details?",
      isUser: false,
      time: "12:32 PM",
    },
    {
      text: "Could you tell me more?",
      isUser: true,
      time: "12:33 PM",
    },
    {
      text: "That sounds exciting!",
      isUser: false,
      time: "12:34 PM",
    },
    {
      text: "That's really cool.",
      isUser: true,
      time: "12:35 PM",
    },
    {
      text: "I appreciate your insights.",
      isUser: false,
      time: "12:36 PM",
    },
    {
      text: "Thank you for asking.",
      isUser: true,
      time: "12:37 PM",
    },
    {
      text: "Hey, how are you?",
      isUser: false,
      time: "12:38 PM",
    },
    {
      text: "I'm good, thanks!",
      isUser: true,
      time: "12:39 PM",
    },
    {
      text: "What have you been up to lately?",
      isUser: false,
      time: "12:40 PM",
    },
    {
      text: "Not much, just working.",
      isUser: true,
      time: "12:41 PM",
    },
    {
      text: "Do you have any plans for the weekend?",
      isUser: false,
      time: "12:42 PM",
    },
    {
      text: "I have a few plans this weekend.",
      isUser: true,
      time: "12:43 PM",
    },
    {
      text: "That's interesting, tell me more.",
      isUser: false,
      time: "12:44 PM",
    },
    {
      text: "Sure, I'd love to share more.",
      isUser: true,
      time: "12:45 PM",
    },
    {
      text: "I see, how do you feel about that?",
      isUser: false,
      time: "12:46 PM",
    },
    {
      text: "I think it's quite fascinating.",
      isUser: true,
      time: "12:47 PM",
    },
    {
      text: "Really? That's amazing!",
      isUser: false,
      time: "12:48 PM",
    },
    {
      text: "Absolutely, that sounds great.",
      isUser: true,
      time: "12:49 PM",
    },
    {
      text: "Can you elaborate on that?",
      isUser: false,
      time: "12:50 PM",
    },
    {
      text: "I'm not sure, but I'll check.",
      isUser: true,
      time: "12:51 PM",
    },
    {
      text: "What do you think about the current trends?",
      isUser: false,
      time: "12:52 PM",
    },
    {
      text: "That makes sense to me.",
      isUser: true,
      time: "12:53 PM",
    },
    {
      text: "Let's catch up soon.",
      isUser: false,
      time: "12:54 PM",
    },
    {
      text: "I'll get back to you on that.",
      isUser: true,
      time: "12:55 PM",
    },
    {
      text: "Have you seen the latest news?",
      isUser: false,
      time: "12:56 PM",
    },
    {
      text: "I agree with you.",
      isUser: true,
      time: "12:57 PM",
    },
    {
      text: "I was wondering if you could help me with something.",
      isUser: false,
      time: "12:58 PM",
    },
    {
      text: "Yes, I can help with that.",
      isUser: true,
      time: "12:59 PM",
    },
    {
      text: "What is your favorite hobby?",
      isUser: false,
      time: "1:00 PM",
    },
    {
      text: "My favorite hobby is reading.",
      isUser: true,
      time: "1:01 PM",
    },
    {
      text: "I'm really enjoying our conversation.",
      isUser: false,
      time: "1:02 PM",
    },
    {
      text: "I'm enjoying our chat as well.",
      isUser: true,
      time: "1:03 PM",
    },
    {
      text: "Could you share more details?",
      isUser: false,
      time: "1:04 PM",
    },
    {
      text: "Could you tell me more?",
      isUser: true,
      time: "1:05 PM",
    },
    {
      text: "That sounds exciting!",
      isUser: false,
      time: "1:06 PM",
    },
    {
      text: "That's really cool.",
      isUser: true,
      time: "1:07 PM",
    },
    {
      text: "I appreciate your insights.",
      isUser: false,
      time: "1:08 PM",
    },
    {
      text: "Thank you for asking.",
      isUser: true,
      time: "1:09 PM",
    },
    {
      text: "Hey, how are you?",
      isUser: false,
      time: "1:10 PM",
    },
    {
      text: "I'm good, thanks!",
      isUser: true,
      time: "1:11 PM",
    },
    {
      text: "What have you been up to lately?",
      isUser: false,
      time: "1:12 PM",
    },
    {
      text: "Not much, just working.",
      isUser: true,
      time: "1:13 PM",
    },
    {
      text: "Do you have any plans for the weekend?",
      isUser: false,
      time: "1:14 PM",
    },
    {
      text: "I have a few plans this weekend.",
      isUser: true,
      time: "1:15 PM",
    },
    {
      text: "That's interesting, tell me more.",
      isUser: false,
      time: "1:16 PM",
    },
    {
      text: "Sure, I'd love to share more.",
      isUser: true,
      time: "1:17 PM",
    },
    {
      text: "I see, how do you feel about that?",
      isUser: false,
      time: "1:18 PM",
    },
    {
      text: "I think it's quite fascinating.",
      isUser: true,
      time: "1:19 PM",
    },
    {
      text: "Really? That's amazing!",
      isUser: false,
      time: "1:20 PM",
    },
    {
      text: "Absolutely, that sounds great.",
      isUser: true,
      time: "1:21 PM",
    },
    {
      text: "Can you elaborate on that?",
      isUser: false,
      time: "1:22 PM",
    },
    {
      text: "I'm not sure, but I'll check.",
      isUser: true,
      time: "1:23 PM",
    },
    {
      text: "What do you think about the current trends?",
      isUser: false,
      time: "1:24 PM",
    },
    {
      text: "That makes sense to me.",
      isUser: true,
      time: "1:25 PM",
    },
    {
      text: "Let's catch up soon.",
      isUser: false,
      time: "1:26 PM",
    },
    {
      text: "I'll get back to you on that.",
      isUser: true,
      time: "1:27 PM",
    },
    {
      text: "Have you seen the latest news?",
      isUser: false,
      time: "1:28 PM",
    },
    {
      text: "I agree with you.",
      isUser: true,
      time: "1:29 PM",
    },
    {
      text: "I was wondering if you could help me with something.",
      isUser: false,
      time: "1:30 PM",
    },
    {
      text: "Yes, I can help with that.",
      isUser: true,
      time: "1:31 PM",
    },
    {
      text: "What is your favorite hobby?",
      isUser: false,
      time: "1:32 PM",
    },
    {
      text: "My favorite hobby is reading.",
      isUser: true,
      time: "1:33 PM",
    },
    {
      text: "I'm really enjoying our conversation.",
      isUser: false,
      time: "1:34 PM",
    },
    {
      text: "I'm enjoying our chat as well.",
      isUser: true,
      time: "1:35 PM",
    },
    {
      text: "Could you share more details?",
      isUser: false,
      time: "1:36 PM",
    },
    {
      text: "Could you tell me more?",
      isUser: true,
      time: "1:37 PM",
    },
    {
      text: "That sounds exciting!",
      isUser: false,
      time: "1:38 PM",
    },
    {
      text: "That's really cool.",
      isUser: true,
      time: "1:39 PM",
    },
    {
      text: "I appreciate your insights.",
      isUser: false,
      time: "1:40 PM",
    },
    {
      text: "Thank you for asking.",
      isUser: true,
      time: "1:41 PM",
    },
    {
      text: "Hey, how are you?",
      isUser: false,
      time: "1:42 PM",
    },
    {
      text: "I'm good, thanks!",
      isUser: true,
      time: "1:43 PM",
    },
    {
      text: "What have you been up to lately?",
      isUser: false,
      time: "1:44 PM",
    },
    {
      text: "Not much, just working.",
      isUser: true,
      time: "1:45 PM",
    },
    {
      text: "Do you have any plans for the weekend?",
      isUser: false,
      time: "1:46 PM",
    },
    {
      text: "I have a few plans this weekend.",
      isUser: true,
      time: "1:47 PM",
    },
    {
      text: "That's interesting, tell me more.",
      isUser: false,
      time: "1:48 PM",
    },
    {
      text: "Sure, I'd love to share more.",
      isUser: true,
      time: "1:49 PM",
    },
    {
      text: "I see, how do you feel about that?",
      isUser: false,
      time: "1:50 PM",
    },
    {
      text: "I think it's quite fascinating.",
      isUser: true,
      time: "1:51 PM",
    },
    {
      text: "Really? That's amazing!",
      isUser: false,
      time: "1:52 PM",
    },
    {
      text: "Absolutely, that sounds great.",
      isUser: true,
      time: "1:53 PM",
    },
    {
      text: "Can you elaborate on that?",
      isUser: false,
      time: "1:54 PM",
    },
    {
      text: "I'm not sure, but I'll check.",
      isUser: true,
      time: "1:55 PM",
    },
    {
      text: "What do you think about the current trends?",
      isUser: false,
      time: "1:56 PM",
    },
    {
      text: "That makes sense to me.",
      isUser: true,
      time: "1:57 PM",
    },
    {
      text: "Let's catch up soon.",
      isUser: false,
      time: "1:58 PM",
    },
    {
      text: "I'll get back to you on that.",
      isUser: true,
      time: "1:59 PM",
    },
    {
      text: "Have you seen the latest news?",
      isUser: false,
      time: "2:00 PM",
    },
    {
      text: "I agree with you.",
      isUser: true,
      time: "2:01 PM",
    },
    {
      text: "I was wondering if you could help me with something.",
      isUser: false,
      time: "2:02 PM",
    },
    {
      text: "Yes, I can help with that.",
      isUser: true,
      time: "2:03 PM",
    },
    {
      text: "What is your favorite hobby?",
      isUser: false,
      time: "2:04 PM",
    },
    {
      text: "My favorite hobby is reading.",
      isUser: true,
      time: "2:05 PM",
    },
    {
      text: "I'm really enjoying our conversation.",
      isUser: false,
      time: "2:06 PM",
    },
    {
      text: "I'm enjoying our chat as well.",
      isUser: true,
      time: "2:07 PM",
    },
    {
      text: "Could you share more details?",
      isUser: false,
      time: "2:08 PM",
    },
    {
      text: "Could you tell me more?",
      isUser: true,
      time: "2:09 PM",
    },
    {
      text: "That sounds exciting!",
      isUser: false,
      time: "2:10 PM",
    },
    {
      text: "That's really cool.",
      isUser: true,
      time: "2:11 PM",
    },
    {
      text: "I appreciate your insights.",
      isUser: false,
      time: "2:12 PM",
    },
    {
      text: "Thank you for asking.",
      isUser: true,
      time: "2:13 PM",
    },
    {
      text: "Hey, how are you?",
      isUser: false,
      time: "2:14 PM",
    },
    {
      text: "I'm good, thanks!",
      isUser: true,
      time: "2:15 PM",
    },
    {
      text: "What have you been up to lately?",
      isUser: false,
      time: "2:16 PM",
    },
    {
      text: "Not much, just working.",
      isUser: true,
      time: "2:17 PM",
    },
    {
      text: "Do you have any plans for the weekend?",
      isUser: false,
      time: "2:18 PM",
    },
    {
      text: "I have a few plans this weekend.",
      isUser: true,
      time: "2:19 PM",
    },
    {
      text: "That's interesting, tell me more.",
      isUser: false,
      time: "2:20 PM",
    },
    {
      text: "Sure, I'd love to share more.",
      isUser: true,
      time: "2:21 PM",
    },
    {
      text: "I see, how do you feel about that?",
      isUser: false,
      time: "2:22 PM",
    },
    {
      text: "I think it's quite fascinating.",
      isUser: true,
      time: "2:23 PM",
    },
    {
      text: "Really? That's amazing!",
      isUser: false,
      time: "2:24 PM",
    },
    {
      text: "Absolutely, that sounds great.",
      isUser: true,
      time: "2:25 PM",
    },
    {
      text: "Can you elaborate on that?",
      isUser: false,
      time: "2:26 PM",
    },
    {
      text: "I'm not sure, but I'll check.",
      isUser: true,
      time: "2:27 PM",
    },
    {
      text: "What do you think about the current trends?",
      isUser: false,
      time: "2:28 PM",
    },
    {
      text: "That makes sense to me.",
      isUser: true,
      time: "2:29 PM",
    },
    {
      text: "Let's catch up soon.",
      isUser: false,
      time: "2:30 PM",
    },
    {
      text: "I'll get back to you on that.",
      isUser: true,
      time: "2:31 PM",
    },
  ]);

  return (
    <section className="flex flex-row justify-center w-full max-h-screen relative">
      <div className="grid grid-rows-12 justify-between">
        <div className=" bg-background z-5 font-semibold w-3xl text-center top-0 absolute pb-2">
          Chat topic
        </div>

        <ScrollArea className="w-3xl rounded-md p-4 row-span-10 mt-10">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex text-am ${
                message.isUser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] rounded-xl p-3 ${
                  message.isUser
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary"
                }`}
              >
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </ScrollArea>

        <Card className="row-span-2 z-10 w-3xl p-3">
          <CardContent>
            <Textarea className="shadow-none" placeholder="Ask anything" />
          </CardContent>
          <CardFooter className="grid grid-cols-1">
            <div className="flex justify-end">
              <Button>Send</Button>
            </div>
            <div className="text-gray-400 text-center">
              Gemini can make mistakes
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
