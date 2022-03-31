import React from 'react'

const Result = () => {
  return (
		<div className="bg-white">
			<section className="flex justify-center py-4 ">
				<div class="flex py-4 w-[750px] flex-col">
					<div className="flex mb-4">
						<div class="flex-none w-48 h-14  p-4">
							<img src="/Logo.png" alt="Logo" />
						</div>
						<div class="flex-initial   grow p-4">
							<h2 className="text-center text-lg mb-2 ">
								FREMONT COLLEGE OF EDUCATION
							</h2>
							<p className="text-center text-sm mb-2">
								No.5 Raymond Osuman Street, PMB 2191 <br /> Maitama, Abuja,
								Nigeria.
							</p>
							<h2 className="text-center text-lg font-bold mb-2">
								Post Graduate Diploma in Education
							</h2>
							<p className="text-center text-sm ">
								Student First Semester Statement Of Result
							</p>
						</div>
						<div class="flex-initial w-48 p-4">
							<div className="flex justify-center">
								<img src="/Passport.png" alt="" />
							</div>
						</div>
					</div>

					{/* section  2 */}

					<div className="flex justify-between p-4">
						<div className=" w-64">
							<div className="grid grid-cols-2 mb-2">
								<div>
									<p className="font-bold text-sm">Name:</p>
								</div>

								<div>
									<p className="text-sm">Chukwuma Chijioke</p>
								</div>
							</div>

							<div className="grid grid-cols-2">
								<div>
									<p className="font-bold text-sm">Level:</p>
								</div>

								<div>
									<p className="text-sm">100 Level</p>
								</div>
							</div>
						</div>
						<div className=" w-64">
							<div className="grid grid-cols-2 mb-2">
								<div>
									<p className="font-bold text-sm">Reg No.:</p>
								</div>

								<div>
									<p className="text-sm">FCE/PGDE/2021/002</p>
								</div>
							</div>

							<div className="grid grid-cols-2">
								<div>
									<p className="font-bold text-sm">Session:</p>
								</div>

								<div>
									<p className="text-sm">2022/2023 Session</p>
								</div>
							</div>
						</div>
					</div>

					{/* Results Section */}
					<div>
						<div className="grid grid-cols-7 gap-4 mt-2 bg-bismarck py-2 px-4 text-white text-sm">
							<div>
								<p>S/N</p>
							</div>
							<div>
								<p>Course Code</p>
							</div>
							<div className="col-span-2">
								<p>Course Title</p>
							</div>
							<div>
								<p>Unit</p>
							</div>
							<div>
								<p>Grade</p>
							</div>
							<div>
								<p>Total Points</p>
							</div>
						</div>

						<div className="grid grid-cols-7 gap-4  bg-gray-100 py-2 px-4 text-sm">
							<div>
								<p>1.</p>
							</div>
							<div>
								<p>PDE 701</p>
							</div>
							<div className="col-span-2">
								<p>History of Education</p>
							</div>
							<div>
								<p>2</p>
							</div>
							<div>
								<p>A</p>
							</div>
							<div>
								<p>8</p>
							</div>
						</div>

						<div className="grid grid-cols-7 gap-4 bg-white py-2 px-4 text-sm">
							<div>
								<p>1.</p>
							</div>
							<div>
								<p>PDE 701</p>
							</div>
							<div className="col-span-2">
								<p>History of Education</p>
							</div>
							<div>
								<p>2</p>
							</div>
							<div>
								<p>A</p>
							</div>
							<div>
								<p>8</p>
							</div>
						</div>

						<div className="grid grid-cols-7 gap-4 bg-white py-2 px-4 text-sm">
							<div>
								<p>1.</p>
							</div>
							<div>
								<p>PDE 701</p>
							</div>
							<div className="col-span-2">
								<p>History of Education</p>
							</div>
							<div>
								<p>2</p>
							</div>
							<div>
								<p>A</p>
							</div>
							<div>
								<p>8</p>
							</div>
						</div>

						<div className="grid grid-cols-7 gap-4 bg-white py-2 px-4 text-sm">
							<div>
								<p>1.</p>
							</div>
							<div>
								<p>PDE 701</p>
							</div>
							<div className="col-span-2">
								<p>History of Education</p>
							</div>
							<div>
								<p>2</p>
							</div>
							<div>
								<p>A</p>
							</div>
							<div>
								<p>8</p>
							</div>
						</div>

						<div className="grid grid-cols-7 gap-4 bg-white py-2 px-4 text-sm">
							<div>
								<p>1.</p>
							</div>
							<div>
								<p>PDE 701</p>
							</div>
							<div className="col-span-2">
								<p>History of Education</p>
							</div>
							<div>
								<p>2</p>
							</div>
							<div>
								<p>A</p>
							</div>
							<div>
								<p>8</p>
							</div>
						</div>
					</div>

					{/* Summary Section */}

					<div className="w-[550px] mt-4">
						<div className="grid grid-cols-6 gap-4 mt-2 bg-bismarck py-2 px-4 text-white text-sm">
							<div>
								<p>UNTS</p>
							</div>
							<div>
								<p>UNTD</p>
							</div>
							<div>
								<p>GPTS</p>
							</div>
							<div>
								<p>GPTD</p>
							</div>
							<div>
								<p>GPATS</p>
							</div>
							<div>
								<p>GPATD</p>
							</div>
						</div>

						<div className="grid grid-cols-6 gap-4  bg-gray-100 py-2 px-4  text-sm">
							<div>
								<p>028</p>
							</div>
							<div>
								<p>028</p>
							</div>
							<div>
								<p>067</p>
							</div>
							<div>
								<p>067</p>
							</div>
							<div>
								<p>2.71</p>
							</div>
							<div>
								<p>2.71</p>
							</div>
						</div>
					</div>

					{/* Remark Section */}

					<div className='w-[300px] mt-4'>
						<p className="text-sm">
							Remarks: <span className="text-bismarck ">Pass</span>
						</p>

                        <hr className='mt-16 bg-gray-200'/>
                        <p className='text-sm'>Registrar</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Result
