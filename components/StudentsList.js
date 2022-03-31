import React from 'react'

const StudentsList = ({ student }) => {
  return (
		<div className="grid grid-cols-8 gap-4 my-2 border-b-2 py-2 px-4 ">
			<div>
				<p>{student.id}</p>
			</div>
			<div>
				<p>{student.surname}</p>
			</div>
			<div>
				<p>{student.firstname}</p>
			</div>
			<div>
				<p>{student.age}</p>
			</div>
			<div>
				<p>{student.gender}</p>
			</div>
			<div>
				<p>{student.level}</p>
			</div>
			<div>
				<p>{student.state}</p>
			</div>
			<div>
				<button className="py-2 text-sm px-2 bg-green-600 rounded text-white">
					Download Result
				</button>
			</div>
		</div>
	);
}

export default StudentsList
