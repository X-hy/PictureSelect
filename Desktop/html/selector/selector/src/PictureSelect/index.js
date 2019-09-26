import React, { Component } from 'react'
// import { Checkbox } from 'antd';
import './index.css'
// import { Checkbox } from '@alifd/next';

// class Checkbox1 extends Component {
//     render() {
//         return (
//             <div className="all">
//                <Checkbox checked >全选</Checkbox>
//                 <Checkbox defaultIndeterminate >
//                     <img src="https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ" alt=""/>
//                 </Checkbox>
//                 <Checkbox defaultIndeterminate >
//                     <img src="https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ" alt=""/>
//                 </Checkbox>
//                 <Checkbox defaultIndeterminate >
//                     <img src="https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ" alt=""/>
//                 </Checkbox>
//             </div >
//         );
//     }
// }

// export default Checkbox1;








// const CheckboxGroup = Checkbox.Group;

// const plainOptions = ['https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ', 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ', 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'];
// const defaultCheckedList = [];

// class PictureSelect extends Component {
//     state = {
//         checkedList: defaultCheckedList,
//         indeterminate: true,
//         checkAll: false,
//     };

//     onChange = checkedList => {
//         this.setState({
//             checkedList,
//             indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
//             checkAll: checkedList.length === plainOptions.length,
//         });
//     };

//     onCheckAllChange = e => {
//         this.setState({
//             checkedList: e.target.checked ? plainOptions : [],
//             indeterminate: false,
//             checkAll: e.target.checked,
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <div style={{ borderBottom: '1px solid #E9E9E9' }}>
//                     <Checkbox
//                         indeterminate={this.state.indeterminate}
//                         onChange={this.onCheckAllChange}
//                         checked={this.state.checkAll}
//                     >

//           </Checkbox>
//                 </div>
//                 <br />
//                 <CheckboxGroup
//                     options={plainOptions}
//                     value={this.state.checkedList}
//                     onChange={this.onChange}
//                 />
//             </div>
//         );
//     }
// }

// export default PictureSelect


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
        if (item.name === '全选') { // 如果点击的是全选，就把所有的选中或全部取消勾选
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
        // 如果全选之后，取消勾选其中的一个或多个，则会把全选也取消勾选掉
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
        for (let a = 1; a < len; a++) { // 遍历，如果列表里除了第一个之外，其他的都勾选的话，就把全选按钮也勾选掉
            if (!this.state.checklist[a].checked) {
                ev = false;
            }
        }
        if (ev) {
            this.state.checklist[0].checked = true;
        }

        this.setState({ // 每点击一次更新状态
            checklist: this.state.checklist
        })
    }
}
export default PictureSelect


