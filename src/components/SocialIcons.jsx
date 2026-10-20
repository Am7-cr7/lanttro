// أيقونات السوشيال ميديا: مرسومة بـ SVG بنفسنا
// السبب: مكتبة lucide-react الجديدة شالت أيقونات البراندات، فمش هنعتمد عليها

// أيقونة إنستجرام: مربع بحواف دايرية ودايرة في النص ونقطة صغيرة فوق
function Instagram({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* المربع الخارجي */}
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      {/* الدايرة اللي في النص */}
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      {/* النقطة الصغيرة فوق على اليمين */}
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

// أيقونة تويتر (X): علامة X مملوءة باللون الحالي
function Twitter({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// أيقونة لينكدإن: مربع مملوء فيه حرف in
function Linkedin({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

// تصدير الثلاثة عشان Team وFooter يستخدموهم
export { Instagram, Twitter, Linkedin };