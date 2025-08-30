// src/components/Whitepaper.tsx

const PDF_URL = "/MEMORYPC_Produkthandbuch.pdf";

export default function Whitepaper() {
	return (
		<section id="whitepaper" className="relative py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-[1440px] px-6">
				{/* Titre */}
				<h2 className="mb-8 text-center font-bangers text-4xl text-white md:mb-12 md:text-5xl">
					WHITEPAPER
				</h2>

				{/* Actions */}
				<div className="mb-6 flex flex-wrap justify-center gap-3">
					<a
						href={PDF_URL}
						download
						className="rounded-md bg-[#D88C8C] px-4 py-2 font-bangers text-sm tracking-[0.03em] text-[#1C244B] transition hover:bg-[#c67878]"
					>
						Download PDF
					</a>
					<a
						href={PDF_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-md bg-white/10 px-4 py-2 font-bangers text-sm tracking-[0.03em] text-white transition hover:bg-white/20"
					>
						Open in New Tab
					</a>
				</div>

				{/* Viewer avec fallback (mobile-safe) */}
				<div className="mx-auto w-full max-w-5xl overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_6px_30px_rgba(0,0,0,0.25)]">
					{/* Beaucoup de mobiles ne rendent pas les PDF inline.
              <object> + fallback <div> assurent une UX propre. */}
					<object
						data={PDF_URL}
						type="application/pdf"
						className="block h-[70vh] w-full md:h-[75vh]"
					>
						{/* Fallback si le PDF ne peut pas être affiché inline */}
						<div className="flex h-[60vh] w-full flex-col items-center justify-center gap-3 p-6 md:h-[65vh]">
							<p className="text-center font-dmsans text-white/80">
								Your device doesn’t support inline PDF preview.
							</p>
							<div className="flex flex-wrap justify-center gap-3">
								<a
									href={PDF_URL}
									target="_blank"
									rel="noopener noreferrer"
									className="rounded-md bg-[#D88C8C] px-4 py-2 font-bangers text-sm tracking-[0.03em] text-[#1C244B] transition hover:bg-[#c67878]"
								>
									Open PDF
								</a>
								<a
									href={PDF_URL}
									download
									className="rounded-md bg-white/10 px-4 py-2 font-bangers text-sm tracking-[0.03em] text-white transition hover:bg-white/20"
								>
									Download
								</a>
							</div>
						</div>
					</object>
				</div>

				{/* Lien d’accessibilité */}
				<p className="mt-4 text-center font-dmsans text-sm text-white/70">
					Trouble viewing?{" "}
					<a
						href={PDF_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="underline"
					>
						Open the document
					</a>
					.
				</p>
			</div>
		</section>
	);
}
