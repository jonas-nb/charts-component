import React from 'react'
import { api } from '../../assets/js/api'

const DayComponent = () => {
    return (
        <div className="m-auto flex justify-around p-3">
            {api.map(({ day, amount }, i) => (
                <div
                    key={i}
                    data-tip={`$${amount}`}
                    className="tooltip h-44 flex flex-col-reverse items-center"
                >
                    <div className="w-10 font-[500]">{day}</div>
                    <div
                        style={{ height: `${amount * 3}px` }}
                        className={`${
                            amount > 50 ? `bg-[#76b4bc]` : 'bg-[#eb765d]'
                        } cursor-pointer flex flex-col-reverse w-9 rounded-md`}
                    ></div>
                </div>
            ))}
        </div>
    )
}

export default DayComponent
