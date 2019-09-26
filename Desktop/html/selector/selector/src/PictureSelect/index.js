import React, { Component } from 'react'
import './index.css'


class PictureSelect extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            checklist: [
                { name: '全选', checked: false,id:1 },
                { name: '', checked: false, url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ' ,id:2},
                { name: '', checked: false, url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ' ,id:3},
                { name: '', checked: false, url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ',id:4 },
            ],
        }
    }
    render() {
        let _self = this;
        return (
            <div className="todo">
                {
                    this.state.checklist.length ?
                        this.state.checklist.map(function (item, index) {
                             return (
                        <div key={index}>
                            <label>
                                <input type="checkbox" onChange={_self.checkThis.bind(_self,item)} checked={item.checked} />
                                    {item.name}
                                    <img src={item.url} alt="" />
                                </label>
                            </div>)
                        })
                        : ''
                }

            </div>
        )
    }
    checkThis(item) {
        item.checked = !item.checked;
        if (item.name === '全选') { 
            if (item.checked) {
                this.state.checklist.forEach(i => {
                    i.checked = true;
                })
            } else {
                this.state.checklist.forEach(i => {
                    i.checked = false;
                })
            }

        }
        
        let result = this.state.checklist.some(j => {
            if (!j.checked) {
                return true;
            }
        })
        if (result) {
            this.state.checklist[0].checked = false;
        }


        let len = this.state.checklist.length
        let ev = true;
        for (let a = 1; a < len; a++) {
            if (!this.state.checklist[a].checked) {
                ev = false;
            }
        }
        if (ev) {
            this.state.checklist[0].checked = true;
        }

        this.setState({ 
            checklist: this.state.checklist
        })
    }
}
export default PictureSelect


