'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import type { BlogPost } from '@/app/blog/types.ts';

interface BlogSidebarProps {
  currentPostId: string;
  posts: BlogPost[];
}

export function BlogSidebar({ currentPostId, posts }: BlogSidebarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Search Posts</SidebarGroupLabel>
        <SidebarGroupContent>
          <div className="flex items-center space-x-2 p-2">
            <Input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow"
            />
            <Button variant="outline" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </Button>
          </div>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Other Posts</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {filteredPosts.map((post) => (
              <SidebarMenuItem key={post.id}>
                <SidebarMenuButton asChild isActive={post.id === currentPostId}>
                  <Link href={`/post/${post.id}`}>{post.title}</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
}
