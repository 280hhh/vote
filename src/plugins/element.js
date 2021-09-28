import Vue from 'vue'
import { Button } from 'element-ui'
import {Form,FormItem} from 'element-ui'
import {Input} from 'element-ui'
import {Message} from 'element-ui'
import {Menu} from 'element-ui'
import {MenuItem} from 'element-ui'
import {Submenu} from 'element-ui'
import {Dropdown,DropdownItem,DropdownMenu} from 'element-ui'
import {Dialog} from 'element-ui'
import {Table} from 'element-ui'
import {Progress} from 'element-ui'
import {TableColumn} from 'element-ui'
import {Backtop} from 'element-ui'
import {Popover} from 'element-ui'
import {Tooltip} from 'element-ui'
import {Popconfirm} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message=Message
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Dialog)
Vue.use(Table)
Vue.use(Progress)
Vue.use(TableColumn)
Vue.use(Backtop)
Vue.use(Popover)
Vue.use(Tooltip)
Vue.use(Popconfirm)