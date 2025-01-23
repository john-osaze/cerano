export default function Partners() {
	return (
		<section className="container bg-white pb-16 pt-14" id="partners">
			<div className="mx-auto max-w-7xl px-2 lg:px-8">
				<h2 className="text-center text-xl/8 font-semibold text-black">
					Trusted by some top organizations
				</h2>
				<div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<img
						alt="Transistor"
						src="/img/partner-1.jpg"
						width={158}
						height={48}
						className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
					/>
					<img
						alt="Reform"
						src="/img/partner-2.png"
						width={158}
						height={48}
						className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
					/>
					<img
						alt="Tuple"
						src="/img/partner-3.jpg"
						width={158}
						height={48}
						className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
					/>
					<img
						alt="SavvyCal"
						src="/img/partner-4.png"
						width={158}
						height={48}
						className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
					/>
					<img
						alt="Statamic"
						src="/img/partner-5.jpg"
						width={158}
						height={48}
						className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
					/>
				</div>
			</div>
		</section>
	)
}
