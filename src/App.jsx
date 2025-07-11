import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">מאמן כושר אישי שיעיף אותך קדימה</h1>
        <p className="text-lg md:text-xl mb-6">אימונים מותאמים אישית שיביאו אותך לתוצאות – גוף חטוב, חזק ובריא!</p>
        <a href="#contact" className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">לקביעת שיחה</a>
      </section>
      <section className="bg-white py-16 px-6 md:px-12 text-gray-800 text-center">
  <div className="max-w-4xl mx-auto">
    <img
      src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80"
      alt="המאמן"
      className="w-40 h-40 mx-auto rounded-full object-cover mb-6 shadow-lg"
    />
    <h2 className="text-3xl font-bold mb-4">שלום! אני אורן, מאמן כושר אישי</h2>
    <p className="text-lg leading-relaxed">
      עם ניסיון של מעל 10 שנים בתחום הכושר, אני עוזר לאנשים להשיג את הגרסה הכי חזקה ובריאה של עצמם. בין אם אתה רוצה לרדת במשקל, להתחזק, או פשוט להרגיש טוב יותר – אני כאן ללוות אותך.
    </p>
  </div>
</section>
<section className="bg-gray-50 py-16 px-6 md:px-12 text-gray-800 text-center">
  <h2 className="text-3xl font-bold mb-10">מה אני מציע?</h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* שירות 1 */}
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <div className="text-5xl mb-4 text-blue-600">💪</div>
      <h3 className="text-xl font-semibold mb-2">אימונים אישיים 1 על 1</h3>
      <p>תוכנית מותאמת אישית לפי היעדים שלך – ליווי מלא באימונים ובבית.</p>
    </div>

    {/* שירות 2 */}
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <div className="text-5xl mb-4 text-green-600">🥗</div>
      <h3 className="text-xl font-semibold mb-2">ליווי תזונתי</h3>
      <p>הדרכה תזונתית מותאמת לאורח החיים שלך – בלי דיאטות קיצוניות.</p>
    </div>

    {/* שירות 3 */}
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <div className="text-5xl mb-4 text-orange-600">🧘‍♂️</div>
      <h3 className="text-xl font-semibold mb-2">אימוני גמישות ושיקום</h3>
      <p>למתאמנים עם פציעות או עומסים – בניית בסיס יציב לגוף שלך.</p>
    </div>
  </div>
</section>
<section className="bg-white py-16 px-6 md:px-12 text-gray-800 text-center">
  <h2 className="text-3xl font-bold mb-10">מה הלקוחות שלי אומרים</h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* המלצה 1 */}
    <div className="bg-gray-50 rounded-xl p-6 shadow-md">
      <p className="text-lg italic mb-4">"אורן שינה לי את החיים! ירדתי 12 ק"ג והתחלתי להרגיש מעולה עם הגוף שלי."</p>
      <div className="font-semibold">שירי מ.</div>
      <div className="text-sm text-gray-500">בת 36, רחובות</div>
    </div>

    {/* המלצה 2 */}
    <div className="bg-gray-50 rounded-xl p-6 shadow-md">
      <p className="text-lg italic mb-4">"מאמן מקצועי, מדויק, ועם אנרגיה מטורפת. סוף סוף מישהו שמבין אותי!"</p>
      <div className="font-semibold">אלעד ק.</div>
      <div className="text-sm text-gray-500">בן 29, ראשון לציון</div>
    </div>

    {/* המלצה 3 */}
    <div className="bg-gray-50 rounded-xl p-6 shadow-md">
      <p className="text-lg italic mb-4">"אחרי פציעה בברך לא חשבתי שאוכל לחזור להתאמן – אורן עשה את זה אפשרי!"</p>
      <div className="font-semibold">מיכאל ש.</div>
      <div className="text-sm text-gray-500">בן 42, תל אביב</div>
    </div>
  </div>
</section>
<section id="contact" className="bg-gray-100 py-16 px-6 md:px-12 text-gray-800">
  <div className="max-w-2xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">צור קשר</h2>
    <p className="mb-8 text-lg">רוצה להתחיל לעבוד איתי או לשאול שאלה? שלח לי הודעה ואחזור אליך בהקדם.</p>

    <form
      action="https://formsubmit.co/eladlevavi@gmail.com"
      method="POST"
      className="grid gap-6 text-left"
    >
      {/* הגדרות נוספות ל-formsubmit */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

      <div>
        <label className="block mb-1 font-semibold">שם מלא</label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">אימייל</label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">הודעה</label>
        <textarea
          name="message"
          rows="4"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
      >
        שלח הודעה
      </button>
    </form>
  </div>
</section>
<footer className="bg-gray-800 text-white py-10 px-6 md:px-12">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
    
    {/* טקסט קרדיט */}
    <div>
      <h3 className="text-xl font-semibold mb-2">מאמן כושר אישי – אורן</h3>
      <p className="text-sm text-gray-400">© {new Date().getFullYear()} כל הזכויות שמורות</p>
    </div>

    {/* קישורים חברתיים */}
    <div className="flex gap-4 justify-center">
      <a href="https://wa.me/972501234567" target="_blank" className="hover:text-green-400 transition">
        🟢 WhatsApp
      </a>
      <a href="mailto:orencoach@example.com" className="hover:text-blue-300 transition">
        ✉️ Email
      </a>
      <a href="https://www.instagram.com" target="_blank" className="hover:text-pink-400 transition">
        📸 Instagram
      </a>
    </div>
  </div>
</footer>
    </div>
  );
}

export default App;
