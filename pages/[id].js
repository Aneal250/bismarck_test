import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
import ResultsList from '../components/ResultsList';

import { PDFExport, savePDF } from '@progress/kendo-react-pdf';


const Result = () => {

	const [ studentDetails, setStudentsDetails ] = useState({})

	const [ profile, setProfile ] = useState({})

	const [ result, setResults ] = useState([])

	const [ cummulative, setCummulative ] = useState({})

	const router = useRouter();
	const { id } = router.query;

	const PDFExportComponents = useRef(null)

	const FetchStudentsDetails = async () => {

		try {
			const res = await axios.post(`https://testapiomniswift.herokuapp.com/api/viewResult/${id}`)
			
			
			console.log(res.data)

			setStudentsDetails(res.data)

			console.log(res.data.data)

			setProfile(res.data.data);


			console.log(res.data.data.result)

			setResults(res.data.data.result);

			console.log(res.data.data.cummulative);

			setCummulative(res.data.data.cummulative);
			

		}catch(error){

		}
	}



	const HandleExport = (e) => {
		PDFExportComponents.current.save();

	}

		useEffect(() => {
			FetchStudentsDetails();
		}, []);


  return (
		<PDFExport ref={PDFExportComponents} paperSize="A3">
			<div className="bg-white">
				<section className="flex justify-center py-4 ">
					<div className="flex py-4 w-[750px] flex-col">
						<div className="flex justify-end">
							<button
								onClick={HandleExport}
								className="py-1 px-2 text-sm bg-bismarck text-white"
							>
								Download Result
							</button>
						</div>
						<div className="flex mb-4">
							<div className="flex-none w-48 h-14  p-4">
								<img src="/Logo.png" alt="Logo" />
							</div>
							<div className="flex-initial   grow p-4">
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
							<div className="flex-initial w-48 p-4">
								<div className="flex justify-center">
									<img src={studentDetails.profile_picture} alt="" />
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
										<p className="text-sm">{`${profile.firstname} ${profile.surname}`}</p>
									</div>
								</div>

								<div className="grid grid-cols-2">
									<div>
										<p className="font-bold text-sm">Level:</p>
									</div>

									<div>
										<p className="text-sm">{profile.level}</p>
									</div>
								</div>
							</div>
							<div className=" w-64">
								<div className="grid grid-cols-2 mb-2">
									<div>
										<p className="font-bold text-sm">Reg No.:</p>
									</div>

									<div>
										<p className="text-sm">{profile.reg_no}</p>
									</div>
								</div>

								<div className="grid grid-cols-2">
									<div>
										<p className="font-bold text-sm">Session:</p>
									</div>

									<div>
										<p className="text-sm">{profile.session}</p>
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

							{result.map((result) => (
								<ResultsList result={result} key={result.coursecode} />
							))}
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
									<p>{cummulative.unts}</p>
								</div>
								<div>
									<p>{cummulative.untd}</p>
								</div>
								<div>
									<p>{cummulative.gpts}</p>
								</div>
								<div>
									<p>{cummulative.gptd}</p>
								</div>
								<div>
									<p>{cummulative.gpats}</p>
								</div>
								<div>
									<p>{cummulative.gpatd}</p>
								</div>
							</div>
						</div>

						{/* Remark Section */}

						<div className="w-[300px] mt-4">
							<p className="text-sm">
								Remarks: <span className="text-bismarck ">Pass</span>
							</p>

							<hr className="mt-16 bg-gray-200" />
							<p className="text-sm">Registrar</p>
						</div>
					</div>
				</section>
			</div>
		</PDFExport>
	);
}

export default Result
