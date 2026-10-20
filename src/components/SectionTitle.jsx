// SectionTitle: عنوان القسم بلونين، الكلمة الأولى رمادية والتانية بيضا
// بنستخدمه في كل الأقسام عشان الشكل يبقى موحد
function SectionTitle({ muted, bold }) {
  return (
    <h2 className="text-center text-4xl font-semibold md:text-5xl">
      {/* الكلمة الرمادية */}
      <span className="text-neutral-500">{muted} </span>
      {/* الكلمة البيضا */}
      <span className="text-white">{bold}</span>
    </h2>
  );
}

export default SectionTitle;