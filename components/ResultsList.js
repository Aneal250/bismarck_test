import React from 'react'

const ResultsList = ({ result }) => {
  return (
		<div className="grid grid-cols-7 gap-4  bg-gray-100 py-2 px-4 text-sm">
			<div>
				<p>{1}</p>
			</div>
			<div>
				<p>{result.coursecode}</p>
			</div>
			<div className="col-span-2">
				<p>{result.title}</p>
			</div>
			<div>
				<p>{result.credit_unit}</p>
			</div>
			<div>
				<p>{result.grade}</p>
			</div>
			<div>
				<p>{result.total_point}</p>
			</div>
		</div>
	);
}

export default ResultsList
