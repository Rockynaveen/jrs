'use client'

import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import Link from 'next/link'
import {
  Calendar,
  ArrowRight,
  X,
  Newspaper,
  ZoomIn,
  Sparkles,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/common/PageHero'
import Footer from '@/components/layout/Footer'

export interface MediaArticle {
  id: string
  category: 'SCHOOL EVENT' | 'SPORTS' | 'ACTIVITIES' | 'EDUCATION' | 'CELEBRATION' | 'ACHIEVEMENT'
  badgeColor?: string
  title: string
  titleEn?: string
  date: string
  excerpt: string
  fullContent?: string
  image: string
  publication?: string
}

const MEDIA_ARTICLES: MediaArticle[] = [
  {
    id: 'media-1',
    category: 'ACHIEVEMENT',
    title: 'à°µà°¿à°¦à±à°¯à°¾à°°à±à°¥à±à°² à°¨à±ˆà°ªà±à°£à±à°¯à°¤à°¨à± à°—à±à°°à±à°¤à°¿à°‚à°šà°¿ à°ªà±à°°à±‹à°¤à±à°¸à°¹à°¿à°‚à°šà°¾à°²à°¿ - à°¸à°¿à°¨à±€ à°¹à±€à°°à±‹, à°¡à±ˆà°°à±†à°•à±à°Ÿà°°à± à°µà°¿à°¶à±à°µà°•à± à°¸à±‡à°¨à±',
    titleEn: '"Identify and Encourage Students\' Innate Talents" â€” Actor & Director Vishwak Sen at JRS Annual Day',
    date: '15 FEB 2023',
    excerpt:
      'à°µà°¿à°¦à±à°¯à°¾à°°à±à°¥à±à°²à°²à±‹ à°¦à°¾à°—à°¿ à°‰à°¨à±à°¨ à°•à°³à°¾ à°¨à±ˆà°ªà±à°£à±à°¯à°¾à°²à°¨à± à°—à±à°°à±à°¤à°¿à°‚à°šà°¿ à°† à°¦à°¿à°¶à°—à°¾ à°ªà±à°°à±‹à°¤à±à°¸à°¾à°¹à°•à°¾à°²à± à°…à°‚à°¦à°¿à°‚à°šà°¿à°¨à°ªà±à°¡à±‡ à°‰à°¨à±à°¨à°¤ à°¸à±à°¥à°¾à°¨à°¾à°²à°²à±‹ à°°à°¾à°£à°¿à°‚à°šà°—à°²à°°à°¨à°¿ à°ªà±à°°à°®à±à°– à°¸à°¿à°¨à±€ à°¹à±€à°°à±‹, à°¡à±ˆà°°à±†à°•à±à°Ÿà°°à± à°µà°¿à°¶à±à°µà°•à± à°¸à±‡à°¨à± à°…à°¨à±à°¨à°¾à°°à±. à°•à±Šà°°à±à°°à±†à°®à±à°² à°ªà°°à°¿à°§à°¿à°²à±‹à°¨à°¿ à°œà±‡à°†à°°à±à°Žà°¸à± à°‡à°‚à°Ÿà°°à±à°¨à±‡à°·à°¨à°²à± à°ªà°¾à° à°¶à°¾à°² à°µà°¾à°°à±à°·à°¿à°•à±‹à°¤à±à°¸à°µà°¾à°¨à°¿à°•à°¿ à°®à±à°–à±à°¯ à°…à°¤à°¿à°¥à°¿à°—à°¾ à°¹à°¾à°œà°°à±ˆ à°ªà±à°°à°¸à°‚à°—à°¿à°‚à°šà°¾à°°à±.',
    fullContent:
      'à°˜à°Ÿà±â€Œà°•à±‡à°¸à°°à± à°®à°‚à°¡à°²à°‚ à°•à±Šà°°à±à°°à±†à°®à±à°² à°ªà°°à°¿à°§à°¿à°²à±‹à°¨à°¿ à°œà±‡à°†à°°à±à°Žà°¸à± à°‡à°‚à°Ÿà°°à±à°¨à±‡à°·à°¨à°²à± à°ªà°¾à° à°¶à°¾à°² à°µà°¾à°°à±à°·à°¿à°•à±‹à°¤à±à°¸à°µà°‚ à°•à°¾à°°à±à°¯à°•à±à°°à°®à°¾à°¨à°¿à°•à°¿ à°®à±à°–à±à°¯ à°…à°¤à°¿à°¥à°¿à°—à°¾ à°ªà±à°°à°®à±à°– à°¨à°Ÿà±à°¡à±, à°¡à±ˆà°°à±†à°•à±à°Ÿà°°à± à°µà°¿à°¶à±à°µà°•à± à°¸à±‡à°¨à±, à°¸à°¿à°¨à±€ à°—à°¾à°¯à°•à±à°¡à± à°ªà±ƒà°¥à±à°µà±€à°šà°‚à°¦à±à°°, à°ªà°°à±à°µà°¤à°¾à°°à±‹à°¹à°•à±à°°à°¾à°²à± à°…à°¨à±à°µà°¿à°¤ à°°à±†à°¡à±à°¡à°¿ à°ªà°¾à°²à±à°—à±Šà°¨à±à°¨à°¾à°°à±. à°µà°¿à°¦à±à°¯à°¾à°°à±à°¥à±à°²à°¨à± à°…à°¨à±à°¨à°¿ à°°à°‚à°—à°¾à°²à°²à±‹ à°¨à±ˆà°ªà±à°£à±à°¯à°¤à°¨à± à°ªà±†à°‚à°ªà±Šà°‚à°¦à°¿à°‚à°šà±‡ à°µà°¿à°§à°‚à°—à°¾ à°¯à°¾à°œà°®à°¾à°¨à±à°¯à°‚ à°šà±‡à°¸à±à°¤à±à°¨à±à°¨ à°•à±ƒà°·à°¿ à°…à°­à°¿à°¨à°‚à°¦à°¨à±€à°¯à°®à°¨à°¿ à°¤à±†à°²à°¿à°ªà°¾à°°à±. à°ªà±à°°à°¿à°¨à±à°¸à°¿à°ªà°¾à°²à± à°œà°—à°¦à±€à°¶à±à°µà°°à°¿ à°¨à°Ÿà°°à°¾à°œà± à°šà±‡à°¤à±à°² à°®à±€à°¦à±à°—à°¾ à°µà°¿à°¶à±à°µà°•à± à°¸à±‡à°¨à±â€Œà°•à± à°®à±†à°®à±†à°‚à°Ÿà±‹ à°…à°‚à°¦à°œà±‡à°¶à°¾à°°à±.',
    image: '/images/featured-news.png',
    publication: 'à°®à°¨ à°¤à±†à°²à°‚à°—à°¾à°£ (Mana Telangana) â€¢ Hyderabad Main, Page 6',
  },
  {
    id: 'media-2',
    category: 'SCHOOL EVENT',
    title: 'à°µà°¿à°¦à±à°¯à°¾à°°à±à°¥à±à°² à°¨à±ˆà°ªà±à°£à±à°¯à°¤à°¨à± à°—à±à°°à±à°¤à°¿à°‚à°šà°¿ à°ªà±à°°à±‹à°¤à±à°¸à°¹à°¿à°‚à°šà°¾à°²à°¿ - à°ªà±à°°à°®à±à°– à°¡à±ˆà°°à±†à°•à±à°Ÿà°°à± à°µà°¿à°¶à±à°µà°•à± à°¸à±‡à°¨à±',
    titleEn: '"Identify and Encourage Student Talents" â€” Director Vishwak Sen at JRS International School',
    date: '14 FEB 2023',
    excerpt:
      'à°µà°¿à°¦à±à°¯à°¾à°°à±à°¥à±à°²à°²à±‹ à°¦à°¾à°—à°¿ à°‰à°¨à±à°¨ à°•à°³à°¾à°¨à±ˆà°ªà±à°£à±à°¯à°¾à°²à°¨à± à°—à±à°°à±à°¤à°¿à°‚à°šà°¿ à°† à°¦à°¿à°¶à°—à°¾ à°ªà±à°°à±‹à°¤à±à°¸à°¾à°¹à°•à°¾à°²à± à°…à°‚à°¦à°¿à°‚à°šà°¿à°¨à°ªà±à°¡à±‡ à°‰à°¨à±à°¨à°¤ à°¸à±à°¥à°¾à°¨à°¾à°²à°²à±‹ à°°à°¾à°£à°¿à°‚à°šà°—à°²à°°à°¨à°¿ à°ªà±à°°à°®à±à°– à°¨à°Ÿà±à°¡à±, à°ªà±à°°à±Šà°¡à±à°¯à±‚à°¸à°°à± à°µà°¿à°¶à±à°µà°•à± à°¸à±‡à°¨à± à°…à°¨à±à°¨à°¾à°°à±. à°µà°¾à°°à±à°·à°¿à°•à±‹à°¤à±à°¸à°µà°‚à°²à±‹ à°µà°¿à°¦à±à°¯à°¾à°°à±à°¥à±à°² à°¸à°¾à°‚à°¸à±à°•à±ƒà°¤à°¿à°• à°ªà±à°°à°¦à°°à±à°¶à°¨à°²à± à°†à°•à°Ÿà±à°Ÿà±à°•à±à°¨à±à°¨à°¾à°¯à°¿.',
    fullContent:
      'à°˜à°Ÿà±â€Œà°•à±‡à°¸à°°à± à°®à°‚à°¡à°²à°‚ à°•à±Šà°°à±à°°à±†à°®à±à°² à°ªà°°à°¿à°§à°¿à°²à±‹à°¨à°¿ à°œà±‡à°†à°°à±à°Žà°¸à± à°‡à°‚à°Ÿà°°à±à°¨à±‡à°·à°¨à°²à± à°ªà°¾à° à°¶à°¾à°² à°µà°¾à°°à±à°·à°¿à°•à±‹à°¤à±à°¸à°µà°‚ à°•à°¾à°°à±à°¯à°•à±à°°à°®à°¾à°¨à°¿à°•à°¿ à°®à±à°–à±à°¯ à°…à°¤à°¿à°¥à°¿à°—à°¾ à°ªà±à°°à°®à±à°– à°¨à°Ÿà±à°¡à±, à°ªà±à°°à±Šà°¡à±à°¯à±‚à°¸à°°à± à°µà°¿à°¶à±à°µà°•à± à°¸à±‡à°¨à±, à°¸à°¿à°¨à±€ à°—à°¾à°¯à°•à±à°¡à± à°ªà±ƒà°¥à±à°µà±€à°šà°‚à°¦à±à°°, à°ªà°°à±à°µà°¤à°¾à°°à±‹à°¹à°•à±à°°à°¾à°²à± à°…à°¨à±à°µà°¿à°¤ à°°à±†à°¡à±à°¡à°¿ à°ªà°¾à°²à±à°—à±Šà°¨à±à°¨à°¾à°°à±. à°ªà±à°°à°¿à°¨à±à°¸à°¿à°ªà°¾à°²à± à°œà°—à°¦à±€à°¶à±à°µà°°à°¿ à°¨à°Ÿà°°à°¾à°œà± à°šà±‡à°¤à±à°² à°®à±€à°¦à±à°—à°¾ à°µà°¿à°¶à±à°µà°•à± à°¸à±‡à°¨à±â€Œà°•à± à°®à±†à°®à±†à°‚à°Ÿà±‹ à°…à°‚à°¦à°œà±‡à°¶à°¾à°°à±.',
    image: '/images/news-surya-clipping.png',
    publication: 'à°¸à±‚à°°à±à°¯ (Surya Daily) â€¢ Ghatkesar',
  },
  {
    id: 'media-3',
    category: 'CELEBRATION',
    title: 'à°ªà°¾à° à°¶à°¾à°²à°²à±‹ à°¸à°¾à°‚à°¸à±à°•à±ƒà°¤à°¿à°• à°•à°¾à°°à±à°¯à°•à±à°°à°®à°¾à°²à± - à°—à°£à°¤à°‚à°¤à±à°° à°¦à°¿à°¨à±‹à°¤à±à°¸à°µ à°µà±‡à°¡à±à°•à°²à±',
    titleEn: 'Patriotic Celebrations & Cultural Performances on Republic Day',
    date: '28 JAN 2023',
    excerpt:
      'à°¨à°¾à°°à°ªà°²à±à°²à°¿à°²à±‹à°¨à°¿ à°œà±‡à°†à°°à±à°Žà°¸à± à°‡à°‚à°Ÿà°°à±à°¨à±‡à°·à°¨à°²à± à°¸à±à°•à±‚à°²à±â€Œà°²à±‹ à°—à°£à°¤à°‚à°¤à±à°° à°¦à°¿à°¨à±‹à°¤à±à°¸à°µ à°µà±‡à°¡à±à°•à°²à± à°˜à°¨à°‚à°—à°¾ à°œà°°à°¿à°—à°¾à°¯à°¿. à°µà°¿à°¦à±à°¯à°¾à°°à±à°¥à±à°²à°šà±‡ à°¨à°¿à°°à±à°µà°¹à°¿à°‚à°šà°¿à°¨ à°¦à±‡à°¶à°­à°•à±à°¤à°¿à°¤à±‹ à°•à±‚à°¡à°¿à°¨ à°¸à°¾à°‚à°¸à±à°•à±ƒà°¤à°¿à°• à°œà°¾à°¨à°ªà°¦ à°¨à±ƒà°¤à±à°¯ à°ªà±à°°à°¦à°°à±à°¶à°¨à°²à± à°šà±‚à°ªà±à°°à±à°²à°¨à± à°†à°•à°Ÿà±à°Ÿà±à°•à±à°¨à±à°¨à°¾à°¯à°¿.',
    fullContent:
      'à°ªà±‹à°šà°¾à°°à°‚ à°®à±à°¨à±à°¸à°¿à°ªà°²à± à°¨à°¾à°°à°ªà°²à±à°²à°¿à°²à±‹à°¨à°¿ à°œà±‡à°†à°°à±à°Žà°¸à± à°‡à°‚à°Ÿà°°à±à°¨à±‡à°·à°¨à°²à± à°¸à±à°•à±‚à°²à±â€Œà°²à±‹ à°—à°£à°¤à°‚à°¤à±à°° à°¦à°¿à°¨à±‹à°¤à±à°¸à°µ à°µà±‡à°¡à±à°•à°²à± à°—à±à°°à±à°µà°¾à°°à°‚ à°˜à°¨à°‚à°—à°¾ à°œà°°à°¿à°—à°¾à°¯à°¿. à°ªà°²à± à°¸à°¾à°‚à°¸à±à°•à±ƒà°¤à°¿à°• à°¨à±ƒà°¤à±à°¯ à°ªà±à°°à°¦à°°à±à°¶à°¨à°²à±à°²à±‹ à°µà°¿à°œà±‡à°¤à°²à±à°—à°¾ à°¨à°¿à°²à°¿à°šà°¿à°¨ à°µà°¿à°¦à±à°¯à°¾à°°à±à°¥à±à°²à°•à± à°ªà±à°°à°¿à°¨à±à°¸à°¿à°ªà°¾à°²à± à°œà°—à°¦à±€à°¶à±à°µà°°à°¿ à°¨à°Ÿà°°à°¾à°œà± à°šà±‡à°¤à±à°² à°®à±€à°¦à±à°—à°¾ à°¬à°¹à±à°®à°¤à±à°²à± à°…à°‚à°¦à°œà±‡à°¶à°¾à°°à±.',
    image: '/images/news-vaartha-clipping.png',
    publication: 'à°µà°¾à°°à±à°¤ (Vaartha Daily) â€¢ Ghatkesar',
  },
  {
    id: 'media-4',
    category: 'SCHOOL EVENT',
    title: 'à°¨à°¾à°°à°ªà°²à±à°²à°¿ à°œà±‡à°†à°°à±à°Žà°¸à± à°‡à°‚à°Ÿà°°à±à°¨à±‡à°·à°¨à°²à± à°ªà°¾à° à°¶à°¾à°²à°²à±‹ à°¸à°¾à°‚à°¸à±à°•à±ƒà°¤à°¿à°• à°ªà±à°°à°¦à°°à±à°¶à°¨à°²à±',
    titleEn: 'Vibrant Cultural Celebrations & 74th Republic Day at JRS International School',
    date: '28 JAN 2023',
    excerpt:
      'à°˜à°Ÿà±â€Œà°•à±‡à°¸à°°à±, à°ªà±‹à°šà°¾à°°à°‚ à°®à±à°¨à±à°¸à°¿à°ªà°²à± à°¨à°¾à°°à°ªà°²à±à°²à°¿à°²à±‹à°¨à°¿ à°œà±‡à°†à°°à±à°Žà°¸à± à°‡à°‚à°Ÿà°°à±à°¨à±‡à°·à°¨à°²à± à°ªà°¾à° à°¶à°¾à°²à°²à±‹ 74à°µ à°—à°£à°¤à°‚à°¤à±à°° à°¦à°¿à°¨à±‹à°¤à±à°¸à°µà°‚ à°¸à°‚à°¦à°°à±à°­à°‚à°—à°¾ à°µà°¿à°¦à±à°¯à°¾à°°à±à°¥à±à°² à°¸à°¾à°‚à°¸à±à°•à±ƒà°¤à°¿à°• à°ªà±à°°à°¦à°°à±à°¶à°¨à°²à± à°•à°¨à±à°¨à±à°² à°ªà°‚à°¡à±à°µà°—à°¾ à°œà°°à°¿à°—à°¾à°¯à°¿.',
    fullContent:
      'à°ªà±‹à°šà°¾à°°à°‚ à°®à±à°¨à±à°¸à°¿à°ªà°²à± à°¨à°¾à°°à°ªà°²à±à°²à°¿à°²à±‹à°¨à°¿ à°œà±‡à°†à°°à±à°Žà°¸à± à°‡à°‚à°Ÿà°°à±à°¨à±‡à°·à°¨à°²à± à°ªà°¾à° à°¶à°¾à°²à°²à±‹ 74à°µ à°—à°£à°¤à°‚à°¤à±à°° à°¦à°¿à°¨à±‹à°¤à±à°¸à°µà°‚ à°¸à°‚à°¦à°°à±à°­à°‚à°—à°¾ à°µà°¿à°¦à±à°¯à°¾à°°à±à°¥à±à°² à°¸à°¾à°‚à°¸à±à°•à±ƒà°¤à°¿à°• à°ªà±à°°à°¦à°°à±à°¶à°¨à°²à± à°•à°¨à±à°¨à±à°² à°ªà°‚à°¡à±à°µà°—à°¾ à°œà°°à°¿à°—à°¾à°¯à°¿. à°µà°¿à°¦à±à°¯à°¾à°°à±à°¥à±à°²à± à°µà°¿à°µà°¿à°§ à°°à°¾à°·à±à°Ÿà±à°°à°¾à°² à°µà°¸à±à°¤à±à°° à°µà±‡à°·à°§à°¾à°°à°£à°²à°¤à±‹ à°…à°²à°°à°¿à°‚à°šà°¾à°°à±. à°¦à±‡à°¶à°­à°•à±à°¤à°¿ à°—à±€à°¤à°¾à°²à°ªà±ˆ à°¨à±ƒà°¤à±à°¯à°¾à°²à± à°¨à°¿à°°à±à°µà°¹à°¿à°‚à°šà°¾à°°à±. à°ˆ à°•à°¾à°°à±à°¯à°•à±à°°à°®à°‚à°²à±‹ à°ªà±à°°à°¿à°¨à±à°¸à°¿à°ªà°¾à°²à± à°œà°—à°¦à±€à°¶à±à°µà°°à°¿ à°¨à°Ÿà°°à°¾à°œà±, à°‰à°ªà°¾à°§à±à°¯à°¾à°¯à±à°²à±, à°µà°¿à°¦à±à°¯à°¾à°°à±à°¥à±à°²à± à°ªà°¾à°²à±à°—à±Šà°¨à±à°¨à°¾à°°à±.',
    image: '/images/news-andhraprabha-clipping.png',
    publication: 'à°†à°‚à°§à±à°°à°ªà±à°°à°­ (Andhra Prabha) â€¢ Rangareddy',
  },
  {
    id: 'media-5',
    category: 'EDUCATION',
    title: 'à°µà°¿à°¦à±à°¯à°¾à°°à±à°¥à±à°²à± à°°à°¾à°œà±à°¯à°¾à°‚à°— à°¸à±à°«à±‚à°°à±à°¤à°¿à°¨à°¿ à°ªà±†à°‚à°ªà±Šà°‚à°¦à°¿à°‚à°šà±à°•à±‹à°µà°¾à°²à°¿ - à°ªà±à°°à°¿à°¨à±à°¸à°¿à°ªà°²à± à°œà°—à°¦à±€à°¶à±à°µà°°à°¿ à°¨à°Ÿà°°à°¾à°œà±',
    titleEn: '"Students Should Uphold the Spirit of the Constitution" â€” Principal Jagadeeshwari Nataraj',
    date: '28 JAN 2023',
    excerpt:
      'à°µà°¿à°¦à±à°¯à°¾à°°à±à°¥à±à°²à± à°°à°¾à°œà±à°¯à°¾à°‚à°— à°¸à±à°«à±‚à°°à±à°¤à°¿à°¤à±‹ à°—à°£à°¤à°‚à°¤à±à°° à°¦à°¿à°¨à±‹à°¤à±à°¸à°µà°‚ à°µà±‡à°¡à±à°•à°²à± à°œà°°à±à°ªà±à°•à±‹à°µà°¡à°‚ à°¹à°°à±à°·à°£à±€à°¯à°®à°¨à°¿ à°œà±‡à°†à°°à±à°Žà°¸à± à°‡à°‚à°Ÿà°°à±à°¨à±‡à°·à°¨à°²à± à°ªà°¾à° à°¶à°¾à°² à°ªà±à°°à°¿à°¨à±à°¸à°¿à°ªà°²à± à°œà°—à°¦à±€à°¶à±à°µà°°à°¿ à°¨à°Ÿà°°à°¾à°œà± à°…à°¨à±à°¨à°¾à°°à±. à°¸à±à°µà°¾à°¤à°‚à°¤à±à°¯à±à°° à°¸à°®à°°à°¯à±‹à°§à±à°² à°µà±‡à°·à°§à°¾à°°à°£à°²à±‹ à°µà°¿à°¦à±à°¯à°¾à°°à±à°¥à±à°²à± à°…à°²à°°à°¿à°‚à°šà°¾à°°à±.',
    fullContent:
      'à°˜à°Ÿà±â€Œà°•à±‡à°¸à°°à± à°®à°‚à°¡à°²à°‚ à°•à±Šà°°à±à°°à±†à°®à±à°² à°ªà°°à°¿à°§à°¿à°²à±‹à°¨à°¿ à°œà±‡à°†à°°à±à°Žà°¸à± à°‡à°‚à°Ÿà°°à±à°¨à±‡à°·à°¨à°²à± à°¸à±à°•à±‚à°²à±â€Œà°²à±‹ à°—à°£à°¤à°‚à°¤à±à°° à°¦à°¿à°¨à±‹à°¤à±à°¸à°µà°‚ à°µà±‡à°¡à±à°•à°²à± à°˜à°¨à°‚à°—à°¾ à°œà°°à°¿à°—à°¾à°¯à°¿. à°¦à±‡à°¶ à°¸à°‚à°¸à±à°•à±ƒà°¤à°¿ à°¸à°¾à°‚à°ªà±à°°à°¦à°¾à°¯à°¾à°²à± à°‰à°Ÿà±à°Ÿà°¿à°ªà°¡à±‡ à°µà°¿à°§à°‚à°—à°¾ à°µà°¿à°¦à±à°¯à°¾à°°à±à°¥à±à°²à± à°¸à°¾à°‚à°¸à±à°•à±ƒà°¤à°¿à°• à°•à°¾à°°à±à°¯à°•à±à°°à°®à°¾à°²à± à°¨à°¿à°°à±à°µà°¹à°¿à°‚à°šà°¾à°°à±.',
    image: '/images/news-manatelangana-republic-day.png',
    publication: 'à°®à°¨ à°¤à±†à°²à°‚à°—à°¾à°£ (Mana Telangana) â€¢ Medchal',
  },
]

export default function MediaPage() {
  const [selectedArticle, setSelectedArticle] = useState<MediaArticle | null>(null)

  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedArticle(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-[#f59e0b] selection:text-slate-900">
      {/* 1. Navbar with active state 'media' */}
      <Navbar activePage="media" />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <PageHero
          breadcrumb="News & Media"
          title="News &"
          titleHighlight="Media"
          subtitle="JRS INTERNATIONAL SCHOOL"
          description="Explore our latest newspaper features, media coverage, achievements, and vibrant happenings from JRS International School, Hyderabad."
          imageSrc="/images/campus-building.jpg"
          imageAlt="JRS International School News & Media"
        />

        {/* 3. Single Unified Media Section (No headings in the middle) */}
        <section
          id="achievements"
          className="relative py-12 sm:py-16 bg-white overflow-hidden"
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12" data-aos="fade-up">
              <div className="flex items-center justify-center gap-2.5 mb-2.5">
                <span className="w-8 h-[2px] bg-[#031c3f]" />
                <span
                  style={{ fontSize: '13px', lineHeight: '23px' }}
                  className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#031c3f]"
                >
                  PRESS & MEDIA
                </span>
                <span className="w-8 h-[2px] bg-[#031c3f]" />
              </div>
              <h2
                style={{ fontSize: '40px', lineHeight: '50px' }}
                className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-[50px] sm:leading-[50px] lg:leading-[50px]"
              >
                Our Achievements <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>in the News</span>
              </h2>
              <p className="mt-2 text-[#111] text-sm sm:text-[15px] max-w-2xl mx-auto leading-relaxed">
                Explore the latest newspaper features, media coverage, achievements, and vibrant happenings from JRS International School.
              </p>
            </div>

            {/* All Media Cards Grid - 3 cards per row on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {MEDIA_ARTICLES.map((article, index) => (
                <div
                  key={article.id}
                  className="bg-white rounded-3xl border border-slate-200 hover:border-slate-300 overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col group cursor-pointer shadow-none"
                  data-aos="fade-up"
                  data-aos-delay={(index % 3 + 1) * 100}
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100 flex items-center justify-center">
                    {/* Full Clipping Image */}
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget
                        target.src = '/images/campus-building.jpg'
                      }}
                    />

                    {/* Subtle Hover Zoom Overlay */}
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <div className="bg-white/95 backdrop-blur-sm text-[#031c3f] font-semibold text-xs sm:text-sm px-4 py-2 rounded-full shadow-xl flex items-center gap-2">
                        <ZoomIn className="w-4 h-4 text-[#f59e0b]" />
                        <span>Click to View Full Size</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Info Footer */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1 bg-white border-t border-slate-100">
                    <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-2.5">
                      <span className="font-semibold text-[#031c3f] flex items-center gap-1.5 truncate">
                        <Newspaper className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{article.publication?.split('â€¢')[0] || 'Press Coverage'}</span>
                      </span>
                      <span className="shrink-0 font-medium">{article.date}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#e31e24] transition-colors line-clamp-2 leading-snug mb-2">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#111] line-clamp-2 leading-relaxed flex-1 mb-4">
                      {article.titleEn || article.excerpt}
                    </p>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#031c3f] group-hover:text-[#e31e24] transition-colors">
                        <span>View Clipping</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="text-[11px] font-medium text-slate-400 truncate max-w-[130px]">
                        {article.publication?.split('â€¢')[1]?.trim() || ''}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Section 3: Bottom Banner (Stay Connected With JRS News & Updates) */}
        <section className="py-[50px] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="relative overflow-hidden bg-gradient-to-r from-[#011a42] via-[#022868] to-[#011a42] rounded-3xl p-8 sm:p-10 lg:p-12 text-white shadow-xl shadow-blue-950/20"
              data-aos="zoom-in"
            >
              {/* Decorative Subtle Background Curves */}
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"
              />
              <div
                aria-hidden="true"
                className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"
              />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Left Side: Icon & Headline */}
                <div className="flex items-center gap-5 sm:gap-6 text-center lg:text-left">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shrink-0 shadow-inner">
                    <Newspaper className="w-8 h-8 sm:w-10 sm:h-10 text-[#f59e0b]" />
                  </div>
                  <div>
                    <span className="inline-block text-[11px] sm:text-xs font-black tracking-widest text-[#f59e0b] uppercase mb-1">
                      NEWS
                    </span>
                    <p className="text-sm sm:text-base text-slate-300 font-normal">
                      Stay Connected With
                    </p>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                      JRS News & Updates
                    </h3>
                  </div>
                </div>

                {/* Right Side: Two CTA Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  {/* View Gallery Yellow Button */}
                  <Link
                    href="/gallery"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-extrabold text-slate-950 bg-[#f59e0b] hover:bg-[#e08e00] active:scale-95 transition-all duration-200 shadow-lg shadow-amber-500/20 text-center"
                  >
                    <span>View Gallery</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {/* School Events Blue Outline Button */}
                  <Link
                    href="/beyond"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm active:scale-95 transition-all duration-200 text-center"
                  >
                    <span>School Events</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 6. Pure Magnified Image Lightbox (No Redundant Text) */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedArticle(null)}
        >
          {/* Close Button in Top-Right */}
          <button
            type="button"
            onClick={() => setSelectedArticle(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-200 cursor-pointer backdrop-blur-md shadow-2xl border border-white/20"
            aria-label="Close"
          >
            <X className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Magnified Image Container - Clean Image Only */}
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex items-center justify-center p-2 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="animate-fade-open flex items-center justify-center">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="max-h-[90vh] max-w-full w-auto h-auto object-contain rounded-2xl shadow-2xl ring-1 ring-white/15"
              />
            </div>
          </div>
        </div>
      )}

      {/* 7. Footer */}
      <Footer />
    </div>
  )
}
