// عداد تنازلي حتى 5 أكتوبر (يظهر فقط في شريط الأخبار العلوي)
function updateCountdown() {
  const countdownEl = document.getElementById('countdown');
  const eventDate = new Date('2025-10-05T23:59:59');
  const now = new Date();
  const diff = eventDate - now;

  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);
    countdownEl.innerHTML = `${days} يوم ${hours} ساعة ${mins} دقيقة ${secs} ثانية`;
  } else {
    countdownEl.innerHTML = "انتهى التسجيل!";
  }
}
setInterval(updateCountdown, 1000);
updateCountdown();

// معالجة نموذج التواصل الرئيسي
document.getElementById('mainContactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('تم استلام طلبك! سنقوم بالتواصل معك قريباً عبر البريد أو الواتساب.');
  this.reset();
});
// ملف جافاسكريبت بسيط للموقع
// يمكنك إضافة أي وظائف تفاعلية هنا للموقع

// مثال: تمرير زر واتساب عائم عند النزول
window.addEventListener('scroll', function() {
  const waFloat = document.querySelector('.whatsapp-float');
  if (!waFloat) return;
  if (window.scrollY > 120) {
    waFloat.style.boxShadow = '0 6px 32px #25d36666';
  } else {
    waFloat.style.boxShadow = '0 4px 22px #25d36644';
  }
});

// مثال: رسالة ترحيب عند فتح الصفحة الرئيسية
if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
  setTimeout(function() {
    // يمكنك تفعيل هذا التنبيه أو استبداله بنافذة منبثقة
    // alert('مرحباً بك في دليل الدراسة في إسطنبول!');
  }, 1200);
}

// يمكنك إضافة أي أكواد جافاسكريبت أخرى، مثل:
// - التفاعل مع قوائم الجامعات
// - إضافة سلايدر صور
// - تحسين تجربة المستخدم في النماذج