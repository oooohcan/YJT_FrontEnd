import type {
  ActionType,
  ProColumns,
  ProTable,
  TableDropdown,
} from '@ant-design/pro-components';
import { searchUser } from '@/services/Api/UserController';
import { Image } from 'antd';
import { useRef } from 'react';
const columns: ProColumns<API.CurrentUser>[] = [
  { dataIndex: 'id', valueType: 'indexBorder', width: 48 },
  { title: '用户名', dataIndex: 'username', copyable: true },
  { title: '账号', dataIndex: 'userAccount', copyable: true },
  {
    title: '头像',
    dataIndex: 'avatarUrl',
    render: (_, record) => (
      <div>
        <Image src={record.avatarurl} width={30} height={30} />
      </div>
    ),
  },
  { title: '性别', dataIndex: 'gender' },
  { title: '邮箱', dataIndex: 'email', copyable: true },
  { title: '状态', dataIndex: 'userStatus' },
  {
    title: '角色',
    dataIndex: 'userRole',
    valueType: 'select',
    valueEnum: {
      0: { text: '普通用户', status: 'Default' },
      1: { text: '管理员', status: 'Success' },
    },
  },
  { title: '邀请码', dataIndex: 'inviteCode' },
  { title: '创建时间', dataIndex: 'createTime', valueType: 'dateTime' },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key={'actionGroup'}
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

export default () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<API.CurrentUser>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params = {}, sort, filter) => {
        console.log(sort, filter);
        const userList = await searchUser();
        return { data: userList };
      }}
      editable={{ type: 'multiple' }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        onChange(value) {
          console.log('value:', value);
        },
      }}
      rowKey={'id'}
      search={{ labelWidth: 'auto' }}
      options={{ setting: { listsHeight: 400 } }}
      form={{
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.starTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{ pageSize: 5, onChange: (page) => console.log(page) }}
      dateFormatter="string"
      headerTitle="高级表格"
    />
  );
};
