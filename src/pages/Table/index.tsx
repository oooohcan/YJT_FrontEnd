import services from '@/services/demo';
import {
  ActionType,
  FooterToolbar,
  PageContainer,
  ProDescriptions,
  ProDescriptionsItemProps,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Divider, Drawer, message } from 'antd';
import { history } from '@umijs/max';
import React, { useRef, useState } from 'react';
import CreateForm from './components/CreateForm';
import UpdateForm, { FormValueType } from './components/UpdateForm';
import { getProblem } from '@/services/Api/ProblemController';

const TableList: React.FC<unknown> = () => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] =
    useState<boolean>(false);
  const [stepFormValues, setStepFormValues] = useState({});
  const actionRef = useRef<ActionType>();
  const [row, setRow] = useState<API.ProblemParams>();
  const [selectedRowsState, setSelectedRows] = useState<API.ProblemParams[]>(
    [],
  );
  const columns: ProDescriptionsItemProps<API.ProblemParams>[] = [
    {
      title: '编号',
      dataIndex: 'id',
      tip: '编号是唯一的 key',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '编号为必填项',
          },
        ],
      },
    },
    {
      title: '题目',
      dataIndex: 'title',
      valueType: 'text',
    },
    {
      title: '类型',
      dataIndex: 'label',
      hideInForm: true,
      valueEnum: {
        0: { text: '算法', status: '算法' },
        1: { text: '后端', status: '后端' },
        2: { text: '前端', status: '前端' },
        3: { text: '测试', status: '测试' },
        4: { text: '运维', status: '运维' },
        5: { text: '计算机网络', status: '计算机网络' },
        6: { text: '操作系统', status: '操作系统' },
        7: { text: '数据库', status: '数据库' },
        8: { text: '其他', status: '其他' },
      },
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (value, record, index) => (
        <>
          <a
            onClick={() => {
              history.push({ pathname: '/detail', search: `id=${index}` });
            }}
          >
            详情
          </a>
        </>
      ),
    },
  ];

  return (
    <PageContainer
      header={{
        title: '组卷',
      }}
    >
      <ProTable<API.ProblemParams>
        headerTitle="题目列表"
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        request={async (params, sorter, filter) => {
          const data = await getProblem({
            ...params,
            sorter,
            filter,
          });
          return {
            data,
            success: true,
          };
        }}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => setSelectedRows(selectedRows),
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              已选择{' '}
              <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>{' '}
              项&nbsp;&nbsp;
            </div>
          }
        >
          <Button
            onClick={async () => {
              actionRef.current?.reloadAndRest?.();
            }}
          >
            取消
          </Button>
          <Button type="primary">组卷</Button>
        </FooterToolbar>
      )}
    </PageContainer>
  );
};

export default TableList;
