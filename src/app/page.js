'use client'

import Content from '@/sections/Content';
import Tp from '@/sections/Tp';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

export default function Home() {

  return (
    <>
      <div className="content-wrapper h-[953px] w-screen relative bg-slate-900">
        <Content />
        <Tp />
      </div>
    </>

  );
}