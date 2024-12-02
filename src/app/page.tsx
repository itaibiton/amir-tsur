"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<div className="h-screen w-screen flex flex-col md:flex-row text-right  items-center">
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.25 }}
				className="w-full h-fit items-center justify-center flex"
			>
				<Image
					src="/amir-draw.jpg"
					alt="Amir's Image"
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: "100%", height: "auto" }}
				/>
			</motion.div>
			<div
				className={`w-full overflow-y-auto flex flex-col h-fit gap-4 md:gap-6 xl:gap-8  max-h-[70vh] p-12 md:p-16`}
			>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.25, delay: 0.3 }}
					style={{ direction: "rtl" }}
				>
					<p className="font-semibold text-xl">
						אתר זה מוקדש לזכרו של סרן אמיר צור, שנהרג ב-7 באוקטובר בכפר עזה.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.25, delay: 0.6 }}
					className="max-w-3xl mx-auto"
					style={{ direction: "rtl" }}
				>
					<p>
						אמיר נולד ב-7 במאי 2000, בן לאסתר ויניב, אח לאיתן, תומר ועופרי. אמיר
						גדל בעמק חפר, ולאחר שסיים תיכון, עברה המשפחה להתגורר בירושלים. אמיר
						צור היה קצין לוחם בסיירת מטכ&quot;ל, שהיה בין הראשונים להתייצב
						בלחימה בקיבוץ כפר עזה. אמיר התפתח במהלך השירות הצבאי כלוחם מצטיין,
						אכפתי, אדיב וסקרן. אמיר בלט בתכונות האופי הייחודיות שלו ורצונו לעזור
						ולהשפיע ככל הניתן. אמיר היה קצין לוחם ופרמדיק מהמוכשרים ביחידה. אמיר
						היה נגן פסנתר, תלמיד מחונן, אלוף הארץ בריצת ניווט, איש משפחה, מדריך
						טיולים, פרמדיק, קצין לוחם מוערך ובעיקר אדם שנגע בלב של כולם.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.25, delay: 0.9 }}
					className="max-w-3xl mx-auto"
					style={{ direction: "rtl" }}
				>
					<p className="font-semibold text-xl">שלא נצא בורים – הפרויקט</p>
					<p>
						&quot;שלא נצא בורים&quot; – זהו צירוף המילים אשר בחר אמיר צור להשתמש
						בהם. במהלך המסלול ביחידה, בסוף כל מסע קשה בנקודת תצפית או בתחילת כל
						שבוע עמוס, או סתם על דלת השירותים, עם טקסט מעשיר בידע – בכל אחד
						מאותם רגעים, אמיר דאג לשתף אותנו בידע הנרחב שלו, תמיד במטרה להעשיר
						אותנו ולהוציאנו, ולו לרגע, מהשגרה התובענית. הפרויקט נועד לשמר את
						הזיכרונות הטובים מאמיר, ובאותה נשימה גם להרחיב את הידע, ללמד ולחנך,
						כמו שאמיר אהב.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.25, delay: 1.2 }}
					className="max-w-3xl mx-auto"
					style={{ direction: "rtl" }}
				>
					<p className="font-semibold text-xl">צוות חותם</p>
					<p>
						צוות חותם הוא צוות הלוחמים בסיירת מטכ&quot;ל אליו השתייך אמיר. הצוות
						במהלך המלחמה חשב על דרך להנציח את אמיר ואת מטרת אמיר. לאורך המדינה
						קיימות מספר נקודות להן יש קשר מיוחד לאמיר ולצוות. בכל אחת מהנקודות
						קיים מונומנט צנוע המשתלב עם הנוף, ובתוכו מוטמע ברקוד קטן. הברקוד
						נועד לפתוח אתר שלם מלא בתוכן העשרה על הנקודה בה נסרק הברקוד, ועל שאר
						הנקודות בארץ, ובכך להכיר את אמיר ואת דרכו.
					</p>
				</motion.div>
			</div>
		</div>
	);
}
