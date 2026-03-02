/* ============================================================
   JESMIN'S BIOLOGY CLASSROOM — app.js  (FINAL FIXED VERSION)
   All buttons work, random quiz order, random option order,
   English flirting lines for Jesmin, no speed/quality controls
   ============================================================ */

'use strict';

// ══════════════════════════════════════════════════════════════
// DATA
// ══════════════════════════════════════════════════════════════
const COURSES = {
  bio1: {
    id: 'bio1', title: 'Biology 1st Paper', tag: 'Plant Biology & Physiology', icon: '🔬',
    chapters: [
      { id: 'ch6',  num: '06', name: 'Chapter 06: ব্রায়োফাইটা ও টেরেডোফাইটা',
        lectures: [
          { title: 'Lecture 1', url: 'https://www.youtube.com/watch?v=WYFMMG1k7iA' },
          { title: 'Lecture 2', url: 'https://www.youtube.com/watch?v=6QpnA67PAOo' },
        ]},
      { id: 'ch8',  num: '08', name: 'Chapter 08: টিস্যু ও টিস্যুতন্ত্র',
        lectures: [
          { title: 'Lecture 1', url: 'https://www.youtube.com/watch?v=5Q5r6Aq24yw' },
          { title: 'Lecture 2', url: 'https://www.youtube.com/watch?v=NvSjdgcaot4' },
          { title: 'Lecture 3', url: 'https://www.youtube.com/watch?v=hx9TzlMSga0' },
        ]},
      { id: 'ch9',  num: '09', name: 'Chapter 09: উদ্ভিদ শারীরতত্ত্ব',
        lectures: [
          { title: 'Lecture 1', url: 'https://www.youtube.com/watch?v=p_FlTEEWChk' },
          { title: 'Lecture 2', url: 'https://www.youtube.com/watch?v=agHqxhAFpyI' },
          { title: 'Lecture 3', url: 'https://www.youtube.com/watch?v=hL1rDygkchg' },
          { title: 'Lecture 4', url: 'https://www.youtube.com/watch?v=2aBnzC-Pmm4' },
          { title: 'Lecture 5', url: 'https://www.youtube.com/watch?v=679FGC5AzFs' },
          { title: 'Lecture 6', url: 'https://www.youtube.com/watch?v=gNhlayKe8fQ' },
          { title: 'Lecture 7', url: 'https://www.youtube.com/watch?v=aFPkAIP0Yzc' },
        ]},
      { id: 'ch10', num: '10', name: 'Chapter 10: উদ্ভিদ প্রজনন',
        lectures: [
          { title: 'Lecture 1', url: 'https://www.youtube.com/watch?v=Fdpw66cYgsU' },
          { title: 'Lecture 2', url: 'https://www.youtube.com/watch?v=O0qBwUVeP1A' },
          { title: 'Lecture 3', url: 'https://www.youtube.com/watch?v=7ju9cySlcyk' },
          { title: 'Lecture 4', url: 'https://www.youtube.com/watch?v=sT2cTncV1wg' },
        ]},
      { id: 'ch11', num: '11', name: 'Chapter 11: জীবপ্রযুক্তি',
        lectures: [
          { title: 'Lecture 1', url: 'https://www.youtube.com/watch?v=zJ4h1wMDwFE' },
          { title: 'Lecture 2', url: 'https://www.youtube.com/watch?v=t2IioVEE43Q' },
          { title: 'Lecture 3', url: 'https://www.youtube.com/watch?v=eYgUCcG3qTM' },
          { title: 'Lecture 4', url: 'https://www.youtube.com/watch?v=7k6kJEuQOFE' },
        ]},
      { id: 'ch12', num: '12', name: 'Chapter 12: জীবের পরিবেশ, বিস্তার ও সংরক্ষণ',
        lectures: [
          { title: 'Lecture 1', url: 'https://www.youtube.com/watch?v=ySTZ7cYMNDM' },
          { title: 'Lecture 2', url: 'https://www.youtube.com/watch?v=GMvoJnTDxgs' },
        ]},
      { id: 'rev', num: '📋', name: 'Revision Classes',
        lectures: [
          { title: 'Chapter 9 | One Shot Class', url: 'https://www.youtube.com/watch?v=11FAVSk2Jdo' },
          { title: 'Chapter 1 | One Shot Class',  url: 'https://www.youtube.com/watch?v=-EXCix7l-0k' },
          { title: 'Revision Class 1',             url: 'https://www.youtube.com/watch?v=835kKWeIMJk' },
        ]},
    ]
  },
  bio2: {
    id: 'bio2', title: 'Biology 2nd Paper', tag: 'Animal Biology & Zoology', icon: '🧬',
    chapters: [
      { id: 'ch5',  num: '05', name: 'Chapter 05: শ্বাসক্রিয়া ও শ্বসন',
        lectures: [
          { title: 'Lecture 1', url: 'https://www.youtube.com/watch?v=-fqJW3RDcVk' },
          { title: 'Lecture 2', url: 'https://www.youtube.com/watch?v=XuCvTb2MFS8' },
          { title: 'Lecture 3', url: 'https://www.youtube.com/watch?v=P7XaKxZUCwU' },
          { title: 'Lecture 4', url: 'https://www.youtube.com/watch?v=GTRoKF1SEQk' },
        ]},
      { id: 'ch6',  num: '06', name: 'Chapter 06: বর্জ্য ও নিষ্কাশন',
        lectures: [
          { title: 'Lecture 1', url: 'https://www.youtube.com/watch?v=k43gVoqpyDw' },
          { title: 'Lecture 2', url: 'https://www.youtube.com/watch?v=b-gFgKQeDOY' },
          { title: 'Lecture 3', url: 'https://www.youtube.com/watch?v=18YVA4bhXp8' },
        ]},
      { id: 'ch7',  num: '07', name: 'Chapter 07: চলন ও অঙ্গচালনা',
        lectures: [
          { title: 'Lecture 1', url: 'https://www.youtube.com/watch?v=8q3uIjjTwWI' },
          { title: 'Lecture 2', url: 'https://www.youtube.com/watch?v=PQKDlAO8nAo' },
          { title: 'Lecture 3', url: 'https://www.youtube.com/watch?v=KDVb5kmpUXY' },
          { title: 'Lecture 4', url: 'https://www.youtube.com/watch?v=DgT5Kng-qCI' },
          { title: 'Lecture 5', url: 'https://www.youtube.com/watch?v=rKapl2pohIY' },
        ]},
      { id: 'ch8',  num: '08', name: 'Chapter 08: সমন্বয় ও নিয়ন্ত্রণ',
        lectures: [
          { title: 'Lecture 1', url: 'https://www.youtube.com/watch?v=16bRqOnsoy0' },
          { title: 'Lecture 2', url: 'https://www.youtube.com/watch?v=-5MWnRMyPHY' },
          { title: 'Lecture 3', url: 'https://www.youtube.com/watch?v=0glvuvOiFQ4' },
          { title: 'Lecture 4', url: 'https://www.youtube.com/watch?v=k1jYGYWJMQU' },
          { title: 'Lecture 5', url: 'https://www.youtube.com/watch?v=lxn2yUiKUSU' },
          { title: 'Lecture 6', url: 'https://www.youtube.com/watch?v=Ns7sCwSd3A4' },
          { title: 'Lecture 7', url: 'https://www.youtube.com/watch?v=NDEr087qSxY' },
        ]},
      { id: 'ch9',  num: '09', name: 'Chapter 09: মানব জীবনের ধারাবাহিকতা',
        lectures: [
          { title: 'Lecture 1', url: 'https://www.youtube.com/watch?v=UC8RlwsvO1c' },
          { title: 'Lecture 2', url: 'https://www.youtube.com/watch?v=pmXzozslnvg' },
          { title: 'Lecture 3', url: 'https://www.youtube.com/watch?v=uQTb-9OBgLQ' },
          { title: 'Lecture 4', url: 'https://www.youtube.com/watch?v=PRdEr9cAZ0A' },
          { title: 'Lecture 5', url: 'https://www.youtube.com/watch?v=KkRoZW3jozI' },
          { title: 'Lecture 6', url: 'https://www.youtube.com/watch?v=BzRxIbmCTB8' },
          { title: 'Lecture 7', url: 'https://www.youtube.com/watch?v=l84mYT-_qx8' },
        ]},
      { id: 'ch10', num: '10', name: 'Chapter 10: মানবদেহের প্রতিরক্ষা',
        lectures: [
          { title: 'Lecture 1', url: 'https://www.youtube.com/watch?v=82dJsxPWO7E' },
          { title: 'Lecture 2', url: 'https://www.youtube.com/watch?v=cBBh1MHIiHY' },
          { title: 'Lecture 3', url: 'https://www.youtube.com/watch?v=Eo99wNNwqWI' },
          { title: 'Lecture 4', url: 'https://www.youtube.com/watch?v=QY_giJxXG48' },
        ]},
      { id: 'ch11', num: '11', name: 'Chapter 11: জীনতত্ত্ব ও বিবর্তন',
        lectures: [
          { title: 'Lecture 1', url: 'https://www.youtube.com/watch?v=i1D8FXfpYZY' },
          { title: 'Lecture 2', url: 'https://www.youtube.com/watch?v=Z3EeZRGhbGs' },
          { title: 'Lecture 3', url: 'https://www.youtube.com/watch?v=9uTYTP220zc' },
          { title: 'Lecture 4', url: 'https://www.youtube.com/watch?v=MhbV6K8OFAc' },
          { title: 'Lecture 5', url: 'https://www.youtube.com/watch?v=Qr-Y5CxTwhs' },
          { title: 'Lecture 6', url: 'https://www.youtube.com/watch?v=tzBxl2jZchQ' },
        ]},
      { id: 'ch12', num: '12', name: 'Chapter 12: প্রাণী আচরণ',
        lectures: [
          { title: 'Lecture 1', url: 'https://www.youtube.com/watch?v=kqLVSwOy8nM' },
          { title: 'Lecture 2', url: 'https://www.youtube.com/watch?v=Rd5qZiCqbzY' },
        ]},
      { id: 'rev', num: '📋', name: 'Revision Classes',
        lectures: [
          { title: 'প্রাণিবৈচিত্র্য ও শ্রেণিবিন্যাস (1)', url: 'https://www.youtube.com/watch?v=BfSlSOL7UsA' },
          { title: 'Suggestion Class',                       url: 'https://www.youtube.com/watch?v=K2gRsGZ5Bm8' },
          { title: 'প্রাণিবৈচিত্র্য ও শ্রেণিবিন্যাস (2)', url: 'https://www.youtube.com/watch?v=R2nbLd-28hc' },
          { title: 'হাইড্রা, রুইমাছ ও ঘাসফড়িং',           url: 'https://www.youtube.com/watch?v=BeUFiqJnjnc' },
        ]},
    ]
  }
};

// ══════════════════════════════════════════════════════════════
// QUIZ DATA
// ══════════════════════════════════════════════════════════════
const QUIZZES = {
  'bio1-ch6': [
    { q: 'রিকসিয়ার যৌন প্রজননে পানি কেন প্রয়োজনীয়?', opts: ['থ্যালাস শুকানো রোধে', 'দ্বিফ্লাজেলাযুক্ত অ্যান্থেরোজয়েড আর্কিগোনিয়ামে সাঁতরে যেতে', 'স্পোর বিতরণে সাহায্য করতে', 'টার্গার চাপ তৈরি করতে'], ans: 1 },
    { q: 'ব্রায়োফাইটার জীবনচক্রে স্পোরোফাইট কেমন?', opts: ['স্বাধীন ও স্বভোজী', 'জীবনচক্রের প্রধান পর্যায়', 'গ্যামেটোফাইটের উপর আংশিক বা সম্পূর্ণভাবে নির্ভরশীল', 'বহুকোষী ও হ্যাপ্লয়েড'], ans: 2 },
    { q: 'মস স্পোর অঙ্কুরোদগমে হৃৎপিণ্ডাকার গঠনটির নাম কী?', opts: ['প্রোথ্যালাস', 'প্রোটোনেমা', 'সোরাস', 'ক্যাপসুল'], ans: 1 },
    { q: 'ব্রায়োফাইটাকে "উদ্ভিদজগতের উভচর" বলা হয় কারণ:', opts: ['লবণ ও মিষ্টি পানিতে বাস করে', 'জলজ থেকে স্থলজে রূপান্তরকারী কিন্তু নিষেকে পানি দরকার', 'ফুলকা ও স্টোমাটা উভয়ই আছে', 'কেবল পানির নিচে সালোকসংশ্লেষণ করতে পারে'], ans: 1 },
    { q: 'টেরিসের কচি পাতার বৈশিষ্ট্য কোনটি?', opts: ['সমান্তরাল শিরাবিন্যাস', 'সার্কিনেট ভার্নেশন (কুণ্ডলিত)', 'জালিকাকার শিরাবিন্যাস', 'কোনো মধ্যশিরা নেই'], ans: 1 },
  ],
  'bio1-ch8': [
    { q: 'দ্বিবীজপত্রী কান্ডের পরিধি বৃদ্ধিতে কোন ভাজক টিস্যু দায়ী?', opts: ['অগ্রস্থ ভাজক টিস্যু', 'আন্তঃপর্বীয় ভাজক টিস্যু', 'পার্শ্বীয় ভাজক টিস্যু (ক্যাম্বিয়াম)', 'আদিম ভাজক টিস্যু'], ans: 2 },
    { q: 'স্ক্লেরেনকাইমা কোন পদার্থ জমার কারণে দৃঢ়তা প্রদান করে?', opts: ['পেকটিন', 'লিগনিন', 'সুবেরিন', 'কিউটিন'], ans: 1 },
    { q: 'জাইলেম টিস্যুর জীবন্ত উপাদান কোনটি?', opts: ['ট্রেকেইড', 'ভেসেল', 'জাইলেম প্যারেনকাইমা', 'জাইলেম ফাইবার'], ans: 2 },
    { q: 'যে ভাস্কুলার বান্ডেলে একই ব্যাসার্ধে জাইলেম ও ফ্লোয়েম থাকে এবং মাঝে ক্যাম্বিয়াম থাকে, সেটি কোন ধরনের?', opts: ['যুগ্ম, সমান্তরাল, বদ্ধ', 'যুগ্ম, সমান্তরাল, মুক্ত', 'রেডিয়াল', 'কেন্দ্রিক'], ans: 1 },
    { q: 'দ্বিবীজপত্রী মূলে জাইলেমের বিন্যাস কেমন হয়?', opts: ['এন্ডার্ক', 'এক্সার্ক', 'মেসার্ক', 'পলিআর্ক'], ans: 1 },
  ],
  'bio1-ch9': [
    { q: 'C3 চক্র (ক্যালভিন চক্র)-এর প্রথম স্থিতিশীল পদার্থ কোনটি?', opts: ['অক্সালোঅ্যাসিটিক এসিড', '৩-ফসফোগ্লিসারিক এসিড (3-PGA)', 'গ্লিসারালডিহাইড-৩-ফসফেট', 'রাইবুলোজ-১,৫-বিসফসফেট'], ans: 1 },
    { q: 'C3 উদ্ভিদে CO₂ স্থিরীকরণকারী মূল এনজাইম কোনটি?', opts: ['PEP কার্বক্সিলেজ', 'রুবিস্কো (RuBisCO)', 'পাইরুভেট ডিহাইড্রোজিনেজ', 'ATP সিন্থেজ'], ans: 1 },
    { q: 'এক অণু গ্লুকোজ থেকে গ্লাইকোলাইসিসে নিট ATP উৎপন্ন হয়:', opts: ['২ ATP', '৪ ATP', '৩৬ ATP', '৩৮ ATP'], ans: 0 },
    { q: 'ক্রেবস চক্র কোথায় সংঘটিত হয়?', opts: ['সাইটোপ্লাজমে', 'মাইটোকন্ড্রিয়ার ম্যাট্রিক্সে', 'মাইটোকন্ড্রিয়ার অভ্যন্তরীণ ঝিল্লিতে', 'থাইলাকয়েডে'], ans: 1 },
    { q: 'স্টোমাটার খোলা-বন্ধ কোন কোষের স্ফীততার পরিবর্তনে নিয়ন্ত্রিত হয়?', opts: ['সহায়ক কোষ', 'রক্ষীকোষ', 'মেসোফিল কোষ', 'এপিডার্মাল কোষ'], ans: 1 },
  ],
  'bio1-ch10': [
    { q: 'পরিণত সপুষ্পক উদ্ভিদের ভ্রূণথলি সাধারণত কেমন?', opts: ['৭-কোষ, ৮-নিউক্লিয়াসযুক্ত', '৮-কোষ, ৭-নিউক্লিয়াসযুক্ত', '৪-কোষ, ৪-নিউক্লিয়াসযুক্ত', '৩-কোষ, ৩-নিউক্লিয়াসযুক্ত'], ans: 0 },
    { q: 'দ্বিনিষেক (Double fertilization) কোন উদ্ভিদের অনন্য বৈশিষ্ট্য?', opts: ['ব্রায়োফাইটা', 'টেরিডোফাইটা', 'জিমনোস্পার্ম', 'অ্যাঞ্জিওস্পার্ম'], ans: 3 },
    { q: 'ত্রয়ী সংযোজনে (Triple fusion) কোনগুলো মিলিত হয়?', opts: ['একটি পুং জননকোষ + ডিম্বাণু', 'একটি পুং জননকোষ + দুটি মেরু নিউক্লিয়াস', 'দুটি পুং জননকোষ + ডিম্বাণু', 'সিনারজিড + অ্যান্টিপোডাল'], ans: 1 },
    { q: 'ত্রয়ী সংযোজনের ফলে কী তৈরি হয়?', opts: ['ডিপ্লয়েড জাইগোট', 'ট্রিপ্লয়েড প্রাথমিক ভ্রূণস্থায়ী নিউক্লিয়াস (PEN)', 'ডিপ্লয়েড বীজত্বক', 'হ্যাপ্লয়েড স্পোর'], ans: 1 },
    { q: 'গর্ভাশয়ের প্রাচীর পরিণত হয়:', opts: ['পেরিস্পার্মে', 'পেরিকার্পে (ফলত্বকে)', 'বীজত্বকে', 'এন্ডোকার্পে'], ans: 1 },
  ],
  'bio1-ch11': [
    { q: 'একটি উদ্ভিদ কোষের সম্পূর্ণ উদ্ভিদে পরিণত হওয়ার ক্ষমতাকে কী বলে?', opts: ['বহুশক্তিমত্তা (Pluripotency)', 'সর্বশক্তিমত্তা (Totipotency)', 'পুনর্জন্ম শক্তি', 'মাইক্রোপ্রোপ্যাগেশন'], ans: 1 },
    { q: 'কোন এনজাইমকে "আণবিক আঠা" (Molecular Glue) বলা হয়?', opts: ['রেস্ট্রিকশন এন্ডোনিউক্লিয়েজ', 'DNA লাইগেজ', 'DNA পলিমারেজ', 'হেলিকেজ'], ans: 1 },
    { q: 'জিনপ্রকৌশলে ব্যবহৃত প্লাজমিড কী?', opts: ['স্বাধীনভাবে প্রতিলিপি তৈরি করতে সক্ষম বহির্ক্রোমোজোমীয় বৃত্তাকার DNA', 'প্রধান ক্রোমোজোমের অংশ', 'ভাইরাল DNA খণ্ড', 'DNA কাটার প্রোটিন'], ans: 0 },
    { q: '"গোল্ডেন রাইস" কোন পুষ্টি উপাদানে সমৃদ্ধ?', opts: ['ভিটামিন সি', 'আয়রন', 'বিটা-ক্যারোটিন (প্রো-ভিটামিন A)', 'অপরিহার্য ফ্যাটি এসিড'], ans: 2 },
    { q: 'Bt তুলা কোন পোকার বিরুদ্ধে প্রতিরোধী?', opts: ['ছত্রাকজনিত রোগ সৃষ্টিকারী পোকা', 'লেপিডোপটেরান পোকামাকড়', 'খরা-প্রতিরোধী', 'উচ্চ লবণাক্ততা-প্রতিরোধী'], ans: 1 },
  ],
  'bio1-ch12': [
    { q: 'বাস্তুতন্ত্রে শক্তির প্রবাহ কেমন হয়?', opts: ['একমুখী', 'দ্বিমুখী', 'চক্রাকার', 'এলোমেলো'], ans: 0 },
    { q: '"১০% সূত্র" অনুযায়ী কী ঘটে?', opts: ['প্রতিটি পুষ্টিস্তরে ১০% শক্তি ক্ষতি হয়', 'কেবল ১০% শক্তি পরবর্তী পুষ্টিস্তরে স্থানান্তরিত হয়', '৯০% শক্তি চর্বি হিসেবে জমা হয়', 'উৎপাদক মাত্র ১০% সূর্যালোক ব্যবহার করে'], ans: 1 },
    { q: '"ইন-সিটু" (In-situ) সংরক্ষণ মানে কী?', opts: ['প্রাকৃতিক আবাসস্থলে সংরক্ষণ', 'প্রাকৃতিক আবাসস্থলের বাইরে সংরক্ষণ', 'জিনপ্রকৌশলের মাধ্যমে সংরক্ষণ', 'মুনাফার জন্য সংগ্রহ'], ans: 0 },
    { q: 'রেড ডেটা বুক (Red Data Book) কে রক্ষণাবেক্ষণ করে?', opts: ['WWF', 'IUCN', 'UNESCO', 'WHO'], ans: 1 },
    { q: 'ওজোনস্তর ক্ষয়ের প্রধান কারণ কোনটি?', opts: ['কার্বন ডাই-অক্সাইড (CO₂)', 'মিথেন (CH₄)', 'ক্লোরোফ্লুরোকার্বন (CFC)', 'নাইট্রোজেন গ্যাস'], ans: 2 },
  ],
  'bio2-ch5': [
    { q: 'প্রোটিস্টা রাজ্যের প্রাণীরা প্রধানত কেমন?', opts: ['বহুকোষী জীব', 'এককোষী ইউক্যারিওটিক জীব', 'প্রোক্যারিওটিক জীব', 'ছত্রাকজাতীয় জীব'], ans: 1 },
    { q: 'ছত্রাকের কোষপ্রাচীর কী দিয়ে তৈরি?', opts: ['সেলুলোজ', 'কাইটিন', 'পেকটিন', 'লিগনিন'], ans: 1 },
    { q: 'অ্যামিবা কীভাবে চলাচল করে?', opts: ['ফ্লাজেলার সাহায্যে', 'সিলিয়ার সাহায্যে', 'ক্ষণপদের (Pseudopodia) সাহায্যে', 'সংকোচনশীল গহ্বরের সাহায্যে'], ans: 2 },
    { q: 'মাশরুম কোন রাজ্যের অন্তর্গত?', opts: ['উদ্ভিদ রাজ্য', 'প্রোটিস্টা রাজ্য', 'ছত্রাক রাজ্য', 'প্রাণী রাজ্য'], ans: 2 },
    { q: 'ইউগ্লেনা (Euglena) অনন্য কারণ এটি:', opts: ['স্বভোজী এবং পরভোজী উভয়ই হতে পারে', 'কেবল স্বভোজী', 'কেবল পরভোজী', 'একটি প্রোক্যারিওট'], ans: 0 },
  ],
  'bio2-ch6': [
    { q: 'পর্ব পরিফেরা (Porifera)-র সদস্যদের সাধারণত কী বলা হয়?', opts: ['জেলিফিশ', 'স্পঞ্জ', 'প্রবাল', 'কৃমি'], ans: 1 },
    { q: 'নিডারিয়া (Cnidaria) পর্বের বৈশিষ্ট্য কী?', opts: ['তিনটি জনন-স্তর (Triploblastic)', 'দুটি জনন-স্তর (Diploblastic)', 'বহিঃকঙ্কাল আছে', 'চারপ্রকোষ্ঠী হৃদপিণ্ড আছে'], ans: 1 },
    { q: 'প্লাটিহেলমিনথিস (Platyhelminthes) হলো:', opts: ['গোলকৃমি', 'চ্যাপটা কৃমি', 'খণ্ডিত কৃমি', 'তারামাছ'], ans: 1 },
    { q: 'মেরুদণ্ডী প্রাণীদের (Vertebrates) বৈশিষ্ট্য কোনটি?', opts: ['কেবল বহিঃকঙ্কাল থাকে', 'নোটোকর্ড পরিণতিতে মেরুদণ্ডে পরিণত হয়', 'মেরুদণ্ড নেই', 'উন্মুক্ত সংবহনতন্ত্র আছে'], ans: 1 },
    { q: 'আর্থ্রোপোডা (Arthropoda) পর্বের বৈশিষ্ট্য:', opts: ['নরম ও অখণ্ডিত দেহ', 'সন্ধিযুক্ত উপাঙ্গ ও কাইটিনময় বহিঃকঙ্কাল', 'অন্তঃকঙ্কাল বিদ্যমান', 'মাথা সুস্পষ্ট নয়'], ans: 1 },
  ],
  'bio2-ch7': [
    { q: 'হাইড্রা (Hydra) কোন পর্বের অন্তর্গত?', opts: ['পরিফেরা', 'নিডারিয়া', 'প্লাটিহেলমিনথিস', 'অ্যানেলিডা'], ans: 1 },
    { q: 'হাইড্রার নিমাটোসিস্ট (Nematocyst) কী কাজে ব্যবহৃত হয়?', opts: ['পরিপাকে', 'চলনে', 'শিকার ধরতে এবং আত্মরক্ষায়', 'প্রজননে'], ans: 2 },
    { q: 'হাইড্রার অযৌন প্রজনন কীভাবে ঘটে?', opts: ['খণ্ডায়নের (Fragmentation) মাধ্যমে', 'মুকুলোদগমের (Budding) মাধ্যমে', 'স্পোর গঠনের মাধ্যমে', 'দ্বিবিভাজনের (Binary fission) মাধ্যমে'], ans: 1 },
    { q: 'হাইড্রার দেহপ্রাচীরে মোট কয়টি স্তর থাকে?', opts: ['একটি', 'দুটি', 'তিনটি', 'চারটি'], ans: 1 },
    { q: 'হাইড্রার পুনরুৎপাদন ক্ষমতা (Regeneration) কোন কোষের কারণে?', opts: ['এপিথেলিওমাস্কুলার কোষ', 'ইন্টারস্টিশিয়াল কোষ (i-কোষ)', 'গ্রন্থিকোষ', 'নিডোব্লাস্ট'], ans: 1 },
  ],
  'bio2-ch8': [
    { q: 'রুই মাছ (Labeo rohita) কোন শ্রেণির অন্তর্গত?', opts: ['উভচর (Amphibia)', 'অস্থিমৎস্য (Osteichthyes)', 'তরুণাস্থিমৎস্য (Chondrichthyes)', 'সরীসৃপ (Reptilia)'], ans: 1 },
    { q: 'রুই মাছ কীভাবে শ্বাস-প্রশ্বাস নেয়?', opts: ['ফুসফুসের মাধ্যমে', 'ত্বকের মাধ্যমে', 'ফুলকার (Gills) মাধ্যমে', 'ফুসফুস ও ফুলকা উভয়ের মাধ্যমে'], ans: 2 },
    { q: 'রুই মাছের বায়ুথলি (Swim bladder) কী কাজে ব্যবহৃত হয়?', opts: ['পরিপাকে', 'শ্রবণে', 'পানিতে ভাসমানতা নিয়ন্ত্রণে', 'প্রজননে'], ans: 2 },
    { q: 'মাছের পার্শ্বরেখা তন্ত্র (Lateral line system) কী শনাক্ত করতে সক্ষম?', opts: ['আলো', 'পানির মধ্যে কম্পন ও তরঙ্গ', 'তাপমাত্রা পরিবর্তন', 'রাসায়নিক সংকেত'], ans: 1 },
    { q: 'রুই মাছের আঁশ কোন ধরনের?', opts: ['প্লাকয়েড (Placoid)', 'গ্যানয়েড (Ganoid)', 'সাইক্লয়েড (Cycloid)', 'টেনয়েড (Ctenoid)'], ans: 2 },
  ],
  'bio2-ch9': [
    { q: 'ঘাসফড়িং (Grasshopper) কোন বর্গের অন্তর্গত?', opts: ['ডিপটেরা (Diptera)', 'লেপিডোপটেরা (Lepidoptera)', 'অর্থোপটেরা (Orthoptera)', 'কোলিওপটেরা (Coleoptera)'], ans: 2 },
    { q: 'ঘাসফড়িং কীভাবে শ্বাস-প্রশ্বাস নেয়?', opts: ['ফুসফুসের মাধ্যমে', 'ফুলকার মাধ্যমে', 'শ্বাসনালি (Tracheal) তন্ত্রের মাধ্যমে', 'বুক ফুসফুসের মাধ্যমে'], ans: 2 },
    { q: 'ঘাসফড়িংয়ের কতজোড়া পা থাকে?', opts: ['২ জোড়া', '৩ জোড়া', '৪ জোড়া', '৫ জোড়া'], ans: 1 },
    { q: 'ঘাসফড়িংয়ের রূপান্তর (Metamorphosis) কোন ধরনের?', opts: ['সম্পূর্ণ রূপান্তর (Holometabolous)', 'অসম্পূর্ণ রূপান্তর (Hemimetabolous)', 'কোনো রূপান্তর ঘটে না', 'হাইপারমেটামরফোসিস'], ans: 1 },
    { q: 'ঘাসফড়িংয়ের শব্দ উৎপাদন প্রক্রিয়াকে কী বলে?', opts: ['ফোনেশন (Phonation)', 'স্ট্রিডুলেশন (Stridulation)', 'ইকোলোকেশন (Echolocation)', 'ভোকালাইজেশন (Vocalization)'], ans: 1 },
  ],
  'bio2-ch10': [
    { q: 'মানব শরীরের সবচেয়ে বড় অঙ্গ কোনটি?', opts: ['যকৃৎ', 'ত্বক', 'মস্তিষ্ক', 'হৃদপিণ্ড'], ans: 1 },
    { q: 'ইনসুলিন কোথা থেকে ক্ষরিত হয়?', opts: ['থাইরয়েড গ্রন্থি থেকে', 'যকৃৎ থেকে', 'অগ্ন্যাশয়ের বিটা (β) কোষ থেকে', 'অ্যাড্রিনাল গ্রন্থি থেকে'], ans: 2 },
    { q: 'প্রাপ্তবয়স্ক মানব দেহে মোট হাড়ের সংখ্যা কত?', opts: ['২০০টি', '২০৬টি', '২১০টি', '২১৫টি'], ans: 1 },
    { q: 'কোন রক্তকণিকা অক্সিজেন পরিবহন করে?', opts: ['শ্বেত রক্তকণিকা', 'অণুচক্রিকা (Platelet)', 'লোহিত রক্তকণিকা', 'রক্তরস (Plasma)'], ans: 2 },
    { q: 'কিডনির কার্যকরী একক কোনটি?', opts: ['অ্যালভিওলাস', 'নেফ্রন (Nephron)', 'নিউরন', 'লোবিউল'], ans: 1 },
  ],
  'bio2-ch11': [
    { q: 'চোখের রেটিনায় কী থাকে?', opts: ['কেবল মেলানিন রঞ্জক', 'রড ও কোন কোষ', 'কেবল রড কোষ', 'কেবল কোন কোষ'], ans: 1 },
    { q: 'অর্গান অব কর্টি (Organ of Corti) কোথায় অবস্থিত?', opts: ['চোখে', 'নাকে', 'অভ্যন্তরীণ কানের কক্লিয়ায়', 'ত্বকে'], ans: 2 },
    { q: 'পীতবিন্দু (Macula lutea) তে কোন কোষের সর্বাধিক ঘনত্ব থাকে?', opts: ['রড কোষ', 'কোন কোষ', 'বাইপোলার কোষ', 'গ্যাংলিয়ন কোষ'], ans: 1 },
    { q: 'চোখের অন্ধবিন্দুতে (Blind spot) কী নেই?', opts: ['রক্তনালি', 'ফটোরিসেপ্টর (রড ও কোন)', 'মেলানিন রঞ্জক', 'স্নায়ুতন্তু'], ans: 1 },
    { q: 'অর্ধবৃত্তাকার নালি (Semicircular canals) কী নিয়ন্ত্রণে সাহায্য করে?', opts: ['শ্রবণে', 'দর্শনে', 'দেহের ভারসাম্য রক্ষায়', 'গন্ধ অনুভবে'], ans: 2 },
  ],
  'bio2-ch12': [
    { q: 'মানব নারীর প্রজনন তন্ত্রের কার্যকরী একক কোনটি?', opts: ['জরায়ু (Uterus)', 'ডিম্বাশয়ের ফলিকল (Ovarian follicle)', 'ফ্যালোপিয়ান নল', 'জরায়ুমুখ (Cervix)'], ans: 1 },
    { q: 'মানুষের নিষেক (Fertilization) সাধারণত কোথায় ঘটে?', opts: ['জরায়ুতে', 'ডিম্বাশয়ে', 'ফ্যালোপিয়ান নলে', 'যোনিতে'], ans: 2 },
    { q: 'ডিম্বস্ফোটন (Ovulation)-এর জন্য কোন হরমোনের আধিক্য দায়ী?', opts: ['FSH হরমোন', 'LH হরমোনের পিক', 'ইস্ট্রোজেন হরমোন', 'প্রজেস্টেরন হরমোন'], ans: 1 },
    { q: 'মানুষের গর্ভকালীন সময়কাল কত দিন?', opts: ['প্রায় ১৮০ দিন (৬ মাস)', 'প্রায় ২৮০ দিন (৯ মাস)', 'প্রায় ৩৬৫ দিন (১২ মাস)', 'প্রায় ২৪০ দিন (৮ মাস)'], ans: 1 },
    { q: 'প্লাসেন্টা কোন হরমোন উৎপন্ন করে?', opts: ['ইনসুলিন', 'hCG (হিউম্যান কোরিওনিক গোনাডোট্রপিন)', 'থাইরক্সিন', 'কর্টিসল'], ans: 1 },
  ],
};

// ══════════════════════════════════════════════════════════════
// FLIRT CONTENT — English, for Jesmin
// ══════════════════════════════════════════════════════════════
const FLIRT_LINES = [
  "Jesmin, even biology can't explain how perfectly you're made 🌸",
  "Every lecture you finish makes me more proud of you, Jesmin 💖",
  "Honestly Jesmin, you're harder to study than biology — and way more interesting 😌",
  "Jesmin, your dedication to learning is almost as beautiful as you are 💜",
  "If beauty was a chapter, Jesmin, you'd be the whole textbook 📚✨",
  "Study hard, Jesmin — smart is the most attractive thing you can be 😍",
  "Jesmin, mitosis couldn't divide my admiration for you even if it tried 🔬💕",
  "You're the kind of girl who makes someone want to ace every quiz, Jesmin 😉",
  "Jesmin, you're my favorite subject — way more fascinating than biology 🧬💖",
  "If effort were a gene, Jesmin, you'd have the dominant allele 🧬",
  "Jesmin, watching you grow smarter every day is literally my favorite thing 💕",
  "You make learning look effortless and beautiful, Jesmin 🌺",
  "Jesmin, your brain is just as beautiful as your smile 😌💜",
  "Science explains a lot — but not how amazing you are, Jesmin 🌸",
  "Jesmin, every right answer you get makes me fall for you all over again 💖",
];
const RESULT_MSGS = {
  low: [
    "Hey Jesmin, that wasn't your best — but I believe in you more than you believe in yourself 💖 Try again!",
    "Jesmin, even the brightest stars have cloudy nights 🌙 You've got this. Let's try once more 💕",
    "Don't worry Jesmin, every wrong answer is just a step closer to getting it right 🌸 You're doing amazing.",
    "Jesmin, stumbling is just part of the journey 💜 Get back up and go again — I'll be rooting for you!",
    "Hey beautiful mind — even biology takes time to click 🌺 You're not behind, you're just building up 💖",
  ],
  mid: [
    "Not bad at all, Jesmin! You're getting there — and honestly that's impressive 😌💜",
    "Jesmin, you're so close to perfect. One more round and you'll nail it 🌸💕",
    "Pretty good, Jesmin! Your brain works as beautifully as you do 🌺 Keep going!",
    "Jesmin, you're already 80% perfect — and the other 20%? Just practice 💖",
    "You passed, Jesmin! Now let's make it a perfect score — I know you can 😍",
  ],
  high: [
    "Jesmin, that's my girl! 💖 A perfect score AND stunning? Truly unfair to the rest of us 😌",
    "I knew you could do it, Jesmin! You're brilliant and I'm SO proud of you 🌸✨",
    "Okay Jesmin, at this point you're just showing off — and I absolutely love it 💜😍",
    "Full marks?! Jesmin, your brain is literally my favorite thing about you 🧬💕 So proud!",
    "Jesmin, you just aced it like it was nothing 💖 You're incredible — don't ever forget that 🌺",
    "Top score, Jesmin! You study hard AND you're amazing — a truly dangerous combination 😌✨",
  ],
};
const HOME_FLIRT = [
  "Study hard, impress me later 😌",
  "Jesmin's brilliance loading... 💜",
  "The smartest girl I know 🌸",
  "Making biology look beautiful ✨",
  "Unstoppable energy, Jesmin 💕",
  "Your dedication > everything 🌺",
  "Brains AND beauty — that's Jesmin 😍",
  "Born to excel, just like you 🌸",
  "Roses are red, biology is cool — but nothing beats you, Jesmin 💜",
];

function randFrom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function getResultMsg(pct) {
  return randFrom(pct < 50 ? RESULT_MSGS.low : pct < 80 ? RESULT_MSGS.mid : RESULT_MSGS.high);
}

// ══════════════════════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════════════════════
const state = {
  dark: false,
  currentCourse: null, currentChapterIdx: null, currentLectureIdx: null,
  quiz: { key: null, questions: [], currentQ: 0, score: 0, retryFn: null },
  progress: {}, quizHistory: [], streak: 0, lastVisit: null,
};

// ══════════════════════════════════════════════════════════════
// PERSISTENCE
// ══════════════════════════════════════════════════════════════
function save() {
  try { localStorage.setItem('jbc-v3', JSON.stringify({ progress: state.progress, quizHistory: state.quizHistory, streak: state.streak, lastVisit: state.lastVisit, dark: state.dark })); } catch(e) {}
}
function load() {
  try {
    const d = JSON.parse(localStorage.getItem('jbc-v3') || '{}');
    state.progress    = d.progress    || {};
    state.quizHistory = d.quizHistory || [];
    state.streak      = d.streak      || 0;
    state.lastVisit   = d.lastVisit   || null;
    state.dark        = d.dark        || false;
  } catch(e) {}
}

// ══════════════════════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════════════════════
function ytId(url) {
  const m = url.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
  return m ? m[1] : '';
}
function courseProgress(cid) {
  const c = COURSES[cid]; let total = 0, done = 0;
  c.chapters.forEach(ch => ch.lectures.forEach((_, li) => { total++; if (state.progress[`${cid}-${ch.id}-${li}`]) done++; }));
  return { total, done, pct: total ? Math.round(done / total * 100) : 0 };
}
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

// ══════════════════════════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════════════════════════
function navigate(page, param) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById(page + '-page');
  if (!el) return;
  el.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (page === 'home')      renderHome();
  if (page === 'course')  { state.currentCourse = param; renderCourse(); }
  if (page === 'dashboard') renderDashboard();
}
window.navigate = navigate;

// ══════════════════════════════════════════════════════════════
// HOME
// ══════════════════════════════════════════════════════════════
function renderHome() {
  ['bio1','bio2'].forEach(cid => {
    const { pct } = courseProgress(cid);
    const f = document.getElementById(cid + '-fill');
    const p = document.getElementById(cid + '-pct');
    if (f) f.style.width = pct + '%';
    if (p) p.textContent = pct + '%';
  });
  let t = 0, d = 0;
  Object.values(COURSES).forEach(c => { const p = courseProgress(c.id); t += p.total; d += p.done; });
  const el = document.getElementById('all-pct');
  if (el) el.textContent = t ? Math.round(d / t * 100) + '%' : '0%';
  document.getElementById('streak-count').textContent = state.streak;
  const ft = document.querySelector('.flirty-tag');
  if (ft) ft.textContent = randFrom(HOME_FLIRT);
}

// ══════════════════════════════════════════════════════════════
// COURSE PAGE
// ══════════════════════════════════════════════════════════════
function renderCourse() {
  const cid = state.currentCourse, course = COURSES[cid];
  document.getElementById('course-page-title').textContent = course.title;
  document.getElementById('course-page-tag').textContent   = course.tag;
  const backBtn = document.getElementById('course-back-btn');
  if (backBtn) backBtn.onclick = () => navigate('home');

  const container = document.getElementById('chapters-container');
  container.innerHTML = '';

  course.chapters.forEach((ch, ci) => {
    const total = ch.lectures.length;
    const done  = ch.lectures.filter((_, li) => state.progress[`${cid}-${ch.id}-${li}`]).length;
    const pct   = Math.round(done / total * 100);

    const lectureHTML = ch.lectures.map((lec, li) => {
      const w = state.progress[`${cid}-${ch.id}-${li}`];
      return `<div class="lecture-item${w?' completed':''}" onclick="openVideo('${cid}','${ch.id}',${ci},${li})">
        <div class="l-icon">${w ? '✓' : li + 1}</div>
        <span class="l-text">${lec.title}</span>
        ${w ? '<span class="l-check">✓</span>' : ''}
      </div>`;
    }).join('');

    const completeTag = pct === 100
      ? `<span class="ch-sub-dot"></span><span style="color:var(--mint);font-weight:700">✓ Done!</span>`
      : '';

    const card = document.createElement('div');
    card.className = 'chapter-card';
    card.style.animationDelay = (ci * 0.07) + 's';
    card.innerHTML = `
      <div class="chapter-header" onclick="toggleChapter(this)">
        <div class="ch-left">
          <div class="ch-num">${ch.num}</div>
          <div class="ch-info">
            <div class="ch-name">${ch.name}</div>
            <div class="ch-sub">
              <span>📹 ${total} lectures</span>
              <span class="ch-sub-dot"></span>
              <span>${done} done</span>
              ${completeTag}
            </div>
          </div>
        </div>
        <div class="ch-right">
          <div class="ch-prog-mini">
            <div class="ch-prog-label">${pct}%</div>
            <div class="prog-bar"><div class="prog-fill" style="width:${pct}%"></div></div>
          </div>
          <div class="ch-chevron">▾</div>
        </div>
      </div>
      <div class="chapter-body">
        <div class="lectures-grid">${lectureHTML}</div>
        <div class="chapter-footer">
          <span class="chapter-lectures-count">${done} of ${total} watched</span>
          <button class="btn-ch-quiz" onclick="startQuiz('${cid}','${ch.id}','${ch.name} — Quiz')">📝 Chapter Quiz</button>
        </div>
      </div>`;
    container.appendChild(card);
  });
}
window.toggleChapter = header => header.closest('.chapter-card').classList.toggle('open');

// ══════════════════════════════════════════════════════════════
// VIDEO PAGE
// ══════════════════════════════════════════════════════════════
function openVideo(cid, chId, chIdx, lecIdx) {
  state.currentCourse     = cid;
  state.currentChapterIdx = chIdx;
  state.currentLectureIdx = lecIdx;

  const course  = COURSES[cid];
  const chapter = course.chapters[chIdx];
  const lecture = chapter.lectures[lecIdx];
  const id      = ytId(lecture.url);

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('video-page').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  document.getElementById('video-back-btn').onclick      = () => navigate('course', cid);
  document.getElementById('video-page-title').textContent = chapter.name;
  document.getElementById('video-h1').textContent         = `${chapter.name} — ${lecture.title}`;
  document.getElementById('video-course-tag').textContent = course.title;
  document.getElementById('video-ch-tag').textContent     = chapter.name;

  loadYTPlayer(id);

  const mobileBtn = document.getElementById('mobile-yt-btn');
  if (mobileBtn) {
    const nb = mobileBtn.cloneNode(true);
    mobileBtn.parentNode.replaceChild(nb, mobileBtn);
    nb.href = `https://www.youtube.com/watch?v=${id}`;
    nb.target = '_blank'; nb.rel = 'noopener noreferrer';
  }

  document.getElementById('prev-lec-btn').disabled = lecIdx === 0;
  document.getElementById('next-lec-btn').disabled = lecIdx === chapter.lectures.length - 1;
  renderSidebar(cid, chIdx, lecIdx);

  const watchKey = `${cid}-${chId}-${lecIdx}`;
  if (!state.progress[watchKey]) {
    setTimeout(() => {
      state.progress[watchKey] = true;
      updateStreak(); save(); spawnHeart();
      renderSidebar(cid, chIdx, lecIdx);
      checkCourseComplete(cid);
    }, 8000);
  }
}
window.openVideo = openVideo;

// ══════════════════════════════════════════════════════════════
// YOUTUBE PLAYER API
// ══════════════════════════════════════════════════════════════
let ytPlayer = null, ytAPIReady = false, ytPendingId = null;

window.onYouTubeIframeAPIReady = function() {
  ytAPIReady = true;
  if (ytPendingId) { createYTPlayer(ytPendingId); ytPendingId = null; }
};

function loadYTPlayer(videoId) {
  if (!ytAPIReady) {
    ytPendingId = videoId;
    if (!document.getElementById('yt-api-script')) {
      const s = document.createElement('script');
      s.id = 'yt-api-script'; s.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(s);
    }
  } else if (ytPlayer) {
    ytPlayer.loadVideoById(videoId);
  } else {
    createYTPlayer(videoId);
  }
}

function createYTPlayer(videoId) {
  if (ytPlayer) { try { ytPlayer.destroy(); } catch(e) {} ytPlayer = null; }
  const wrap = document.getElementById('player-yt-wrap');
  if (wrap) wrap.innerHTML = '<div id="yt-frame"></div>';
  ytPlayer = new YT.Player('yt-frame', {
    videoId,
    playerVars: { rel: 0, modestbranding: 1, iv_load_policy: 3, playsinline: 1, enablejsapi: 1, origin: location.origin },
    events: { onReady: () => {} }
  });
}

function renderSidebar(cid, chIdx, curLi) {
  const chapter = COURSES[cid].chapters[chIdx];
  document.getElementById('sidebar-list').innerHTML = chapter.lectures.map((lec, li) => {
    const w = state.progress[`${cid}-${chapter.id}-${li}`];
    return `<div class="sidebar-item${li===curLi?' active':''}${w?' watched':''}" onclick="openVideo('${cid}','${chapter.id}',${chIdx},${li})">
      <div class="si-num">${w ? '✓' : li + 1}</div>
      <span class="si-label">${lec.title}</span>
    </div>`;
  }).join('');
}

window.prevLec = () => {
  if (state.currentLectureIdx > 0) {
    const ch = COURSES[state.currentCourse].chapters[state.currentChapterIdx];
    openVideo(state.currentCourse, ch.id, state.currentChapterIdx, state.currentLectureIdx - 1);
  }
};
window.nextLec = () => {
  const ch = COURSES[state.currentCourse].chapters[state.currentChapterIdx];
  if (state.currentLectureIdx < ch.lectures.length - 1)
    openVideo(state.currentCourse, ch.id, state.currentChapterIdx, state.currentLectureIdx + 1);
};
window.startLecQuiz = () => {
  const ch = COURSES[state.currentCourse].chapters[state.currentChapterIdx];
  startQuiz(state.currentCourse, ch.id, `${ch.name} — Quiz`);
};

// ══════════════════════════════════════════════════════════════
// QUIZ — Random order + random options
// ══════════════════════════════════════════════════════════════
function shuffleOptions(q) {
  const indexed = q.opts.map((opt, i) => ({ opt, correct: i === q.ans }));
  const shuffled = shuffle(indexed);
  return { q: q.q, opts: shuffled.map(o => o.opt), ans: shuffled.findIndex(o => o.correct) };
}

function startQuiz(cid, chId, label) {
  const key = `${cid}-${chId}`, data = QUIZZES[key];
  if (!data) { alert("This chapter's quiz is coming soon! 🌸"); return; }
  const qs = shuffle(data).map(shuffleOptions);
  state.quiz = { key, label, questions: qs, currentQ: 0, score: 0, retryFn: () => startQuiz(cid, chId, label) };
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('quiz-page').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('quiz-hero-title').textContent = 'Quiz Time! 🧠';
  document.getElementById('quiz-hero-sub').textContent   = label;
  renderQuestion();
}
window.startQuiz = startQuiz;

function renderQuestion() {
  const { questions, currentQ, score } = state.quiz;
  const q = questions[currentQ], total = questions.length;
  document.getElementById('q-counter').textContent    = `${currentQ + 1} / ${total}`;
  document.getElementById('q-score-live').textContent = `Score: ${score}`;
  document.getElementById('q-prog-fill').style.width  = `${((currentQ + 1) / total) * 100}%`;
  document.getElementById('q-text').textContent       = q.q;

  const optsEl = document.getElementById('opts-list');
  optsEl.innerHTML = '';
  ['ক','খ','গ','ঘ'].slice(0, q.opts.length).forEach((letter, i) => {
    const btn = document.createElement('button');
    btn.className   = 'opt-btn';
    btn.textContent = `${letter}. ${q.opts[i]}`;
    btn.onclick     = () => pickAnswer(i, btn);
    optsEl.appendChild(btn);
  });

  document.getElementById('feedback-box').className = 'feedback-box';
  document.getElementById('btn-next-q').className   = 'btn-next-q';
}

function pickAnswer(idx, btn) {
  const q = state.quiz.questions[state.quiz.currentQ], correct = q.ans;
  const allBtns = document.querySelectorAll('.opt-btn');
  allBtns.forEach(b => b.disabled = true);
  allBtns[correct].classList.add('correct');
  if (idx !== correct) btn.classList.add('wrong');
  else state.quiz.score++;
  document.getElementById('q-score-live').textContent = `Score: ${state.quiz.score}`;

  const fb = document.getElementById('feedback-box');
  if (idx === correct) {
    fb.className   = 'feedback-box show feedback-ok';
    fb.textContent = randFrom(['✅ Correct! Brilliant, Jesmin! 💜', '✅ Yes! You knew that! 🌸', '✅ Perfect! That big brain 😌✨', '✅ Exactly right, Jesmin! 💕', '✅ Amazing! You\'re on fire, Jesmin! 🔥']);
  } else {
    fb.className   = 'feedback-box show feedback-bad';
    fb.textContent = `❌ The answer was ${ ['ক','খ','গ','ঘ'][correct] }. You'll get the next one, Jesmin! 💕`;
  }
  document.getElementById('btn-next-q').className = 'btn-next-q show';
}
window.pickAnswer = pickAnswer;

window.nextQuestion = () => {
  state.quiz.currentQ++;
  state.quiz.currentQ >= state.quiz.questions.length ? showResult() : renderQuestion();
};

function showResult() {
  const { score, questions, label } = state.quiz;
  const total = questions.length, pct = Math.round(score / total * 100);
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('result-page').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('res-score').textContent = score;
  document.getElementById('res-of').textContent    = `out of ${total}`;
  document.getElementById('res-emoji').textContent = pct < 50 ? '🥺' : pct < 80 ? '🌸' : '💖';
  document.getElementById('res-msg').textContent   = getResultMsg(pct);
  if (pct >= 80) launchConfetti();
  state.quizHistory.push({ label, score, total, date: new Date().toLocaleDateString() });
  save(); renderResultChart();
  document.getElementById('res-continue-btn').onclick = () => navigate('course', state.currentCourse);
  document.getElementById('res-retry-btn').onclick    = () => state.quiz.retryFn?.();
}

function renderResultChart() {
  const container = document.getElementById('res-chart');
  container.innerHTML = '';
  state.quizHistory.slice(-6).forEach((h, i) => {
    const pct = Math.round(h.score / h.total * 100);
    const col = document.createElement('div'); col.className = 'chart-col';
    col.innerHTML = `<div class="chart-bar" style="height:${Math.max(pct,5)}%;animation-delay:${i*0.1}s"></div><div class="chart-pct">${pct}%</div>`;
    container.appendChild(col);
  });
}

// ══════════════════════════════════════════════════════════════
// DASHBOARD
// ══════════════════════════════════════════════════════════════
function renderDashboard() {
  const watched = Object.values(state.progress).filter(Boolean).length;
  document.getElementById('dash-watched').textContent = watched;
  document.getElementById('dash-quizzes').textContent = state.quizHistory.length;
  document.getElementById('dash-streak').textContent  = state.streak;
  document.getElementById('streak-count').textContent = state.streak;
  const dashSub = document.querySelector('.dash-hero p');
  if (dashSub) dashSub.textContent = randFrom(FLIRT_LINES);
  if (state.quizHistory.length > 0) {
    const avg = Math.round(state.quizHistory.reduce((s, h) => s + (h.score / h.total * 100), 0) / state.quizHistory.length);
    document.getElementById('dash-avg').textContent = avg + '%';
  }
  const progList = document.getElementById('dash-prog-list');
  progList.innerHTML = '';
  Object.values(COURSES).forEach(course => {
    course.chapters.forEach(ch => {
      const total = ch.lectures.length;
      const done  = ch.lectures.filter((_, li) => state.progress[`${course.id}-${ch.id}-${li}`]).length;
      const pct   = Math.round(done / total * 100);
      const row   = document.createElement('div'); row.className = 'ch-prog-row';
      row.innerHTML = `<div class="ch-prog-meta"><span class="ch-prog-name">${ch.name}</span><span class="ch-prog-pct">${done}/${total} (${pct}%)</span></div><div class="prog-bar"><div class="prog-fill" style="width:${pct}%"></div></div>`;
      progList.appendChild(row);
    });
  });
  const histList = document.getElementById('dash-hist-list');
  if (!state.quizHistory.length) {
    histList.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;">No quizzes yet. Start learning! 📚</p>';
  } else {
    histList.innerHTML = [...state.quizHistory].reverse().slice(0, 12).map(h => {
      const pct = Math.round(h.score / h.total * 100);
      const col = pct >= 80 ? 'var(--mint)' : pct >= 50 ? 'var(--gold)' : 'var(--danger)';
      return `<div class="hist-item"><span style="color:var(--text-muted)">${h.date}</span><span style="flex:1;margin-left:12px;font-weight:600">${h.label}</span><span class="hist-score" style="color:${col}">${h.score}/${h.total} (${pct}%)</span></div>`;
    }).join('');
  }
}

// ══════════════════════════════════════════════════════════════
// STREAK
// ══════════════════════════════════════════════════════════════
function updateStreak() {
  const today = new Date().toDateString(), yesterday = new Date(Date.now()-86400000).toDateString();
  if (state.lastVisit === today) return;
  state.streak = state.lastVisit === yesterday ? state.streak + 1 : 1;
  state.lastVisit = today;
  document.getElementById('streak-count').textContent = state.streak;
  save();
}

// ══════════════════════════════════════════════════════════════
// ANIMATIONS
// ══════════════════════════════════════════════════════════════
function launchConfetti() {
  const wrap = document.getElementById('confetti-wrap');
  const colors = ['#7c1dff','#e8195a','#06b6d4','#f59e0b','#10b981','#f9a8d4','#a855f7'];
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const p = document.createElement('div'); p.className = 'confetti-piece';
      p.style.cssText = `left:${Math.random()*100}vw;background:${colors[i%colors.length]};width:${6+Math.random()*8}px;height:${6+Math.random()*8}px;border-radius:${Math.random()>.5?'50%':'2px'};animation-duration:${2+Math.random()*2}s;animation-delay:${Math.random()*1.5}s;`;
      wrap.appendChild(p); setTimeout(() => p.remove(), 4500);
    }, i * 20);
  }
}
function spawnHeart() {
  const emojis = ['💖','💕','🌸','✨','💜','🩷'];
  const h = document.createElement('div'); h.className = 'heart-fly';
  h.textContent = randFrom(emojis); h.style.left = (15+Math.random()*70)+'vw'; h.style.top='80vh';
  document.body.appendChild(h); setTimeout(() => h.remove(), 2600);
}
function spawnParticles() {
  const colors = ['rgba(124,29,255,0.4)','rgba(232,25,90,0.3)','rgba(6,182,212,0.3)'];
  for (let i = 0; i < 12; i++) setTimeout(() => {
    const p = document.createElement('div'); p.className = 'particle';
    const s = 4+Math.random()*6;
    p.style.cssText = `left:${Math.random()*100}vw;width:${s}px;height:${s}px;background:${randFrom(colors)};animation-duration:${8+Math.random()*12}s;animation-delay:${Math.random()*6}s;`;
    document.body.appendChild(p); setTimeout(() => p.remove(), 20000);
  }, i * 300);
}

// ══════════════════════════════════════════════════════════════
// COURSE COMPLETE, POPUP, DARK MODE
// ══════════════════════════════════════════════════════════════
function checkCourseComplete(cid) {
  const { total, done } = courseProgress(cid);
  if (done === total && total > 0) {
    setTimeout(() => {
      launchConfetti();
      showPopup('🎊', 'Course Complete!', `Jesmin, you just finished all of ${COURSES[cid].title}! 🌸 I'm beyond proud of you — you deserve the world! 💖`);
    }, 600);
  }
}
function showPopup(emoji, title, msg) {
  document.getElementById('popup-emoji').textContent = emoji;
  document.getElementById('popup-title').textContent = title;
  document.getElementById('popup-msg').textContent   = msg;
  document.getElementById('popup-overlay').classList.add('show');
}
window.closePopup = () => document.getElementById('popup-overlay').classList.remove('show');
window.toggleDark = function() {
  state.dark = !state.dark;
  document.documentElement.setAttribute('data-theme', state.dark ? 'dark' : 'light');
  document.getElementById('dark-btn').textContent = state.dark ? '☀️' : '🌙';
  save();
};

// ══════════════════════════════════════════════════════════════
// SCROLL + CONTEXT MENU
// ══════════════════════════════════════════════════════════════
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });
document.addEventListener('contextmenu', e => { if (e.target.closest('#player-shell')) e.preventDefault(); });

// ══════════════════════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════════════════════
function init() {
  load();
  document.documentElement.setAttribute('data-theme', state.dark ? 'dark' : 'light');
  document.getElementById('dark-btn').textContent     = state.dark ? '☀️' : '🌙';
  document.getElementById('streak-count').textContent = state.streak;
  updateStreak();
  spawnParticles();
  setInterval(spawnParticles, 15000);
  renderHome();
}
document.addEventListener('DOMContentLoaded', init);
