import React from 'react'
import './shipments.css'
export default function ActionButtons({ handleChangeTab }) {


    return (
        <div className="radio-container">
            <div class="radio-inputs">
                <label class="radio">
                    <input type="radio" name="radio" onChange={() => handleChangeTab("all")} value={"all"} />
                    <span class="name">ALL</span>
                </label>
                <label class="radio">
                    <input type="radio" name="radio" onChange={() => handleChangeTab("on-del")} value={"on-del"} />
                    <span class="name">On Delivery</span>
                </label>

                <label class="radio">
                    <input type="radio" name="radio" onChange={() => handleChangeTab('done')} value={"done"} />
                    <span class="name">Done</span>
                </label>
            </div>
        </div>
    )
}
