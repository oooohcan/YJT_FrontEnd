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
import { history, useModel } from '@umijs/max';
import React, { useRef, useState } from 'react';
import CreateForm from './components/CreateForm';
import UpdateForm, { FormValueType } from './components/UpdateForm';
import { getProblem, pageProblem } from '@/services/Api/ProblemController';
import useSelect from '@/models/selectModel';

const TableList: React.FC<unknown> = () => {
  const actionRef = useRef<ActionType>();
  const [row, setRow] = useState<API.ProblemParams>();
  const [selectedRowsState, setSelectedRows] = useState<API.ProblemParams[]>(
    [],
  );
  const { problems, loading } = useModel('problemModel');

  let ids = selectedRowsState.slice().map((v) => v.id);

  const columns: ProDescriptionsItemProps<API.ProblemParams>[] = [
    {
      title: '编号',
      dataIndex: 'id',
      tip: '编号是唯一的 key',
      width: '20%',
      valueType: 'digit',
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
      hideInSearch: true,
      filters: true,
      onFilter: true,
      width: '20%',
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
      width: '20%',
      render: (value, record, index) => (
        <>
          <a
            onClick={() => {
              history.push({ pathname: '/detail', search: `id=${index + 1}` });
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
        search={false}
        request={async (params) => {
          const data = await getProblem({
            ...params,
          });
          return {
            data: problems,
            success: true,
          };
        }}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => setSelectedRows(selectedRows),
        }}
        pagination={{ defaultPageSize: 5 }}
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
              actionRef.current?.clearSelected?.();
            }}
          >
            取消
          </Button>
          <Button
            type="primary"
            onClick={() => {
              history.push({
                pathname: '/paper',
                search: `ids=${ids}`,
              });
            }}
          >
            组卷
          </Button>
        </FooterToolbar>
      )}
    </PageContainer>
  );
};

export default TableList;
