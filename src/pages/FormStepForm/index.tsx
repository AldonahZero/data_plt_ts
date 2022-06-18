import { CheckOutlined, CloseOutlined, UploadOutlined } from '@ant-design/icons';
import ProForm, { ProFormDigit, ProFormSelect, ProFormText, StepsForm } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import type { FormInstance } from 'antd';
import { Alert, Button, Card, Descriptions, Divider, Result, Switch, Upload } from 'antd';
import React, { useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';
import type { StepDataType } from './data.d';
import styles from './style.less';

const StepDescriptions: React.FC<{
  stepData: StepDataType;
  bordered?: boolean;
}> = ({ stepData, bordered }) => {
  const { dataSetName, dataSetType, uploadUserName, describe } = stepData;
  return (
    <Descriptions column={1} bordered={bordered}>
      <Descriptions.Item label="数据集名称"> {dataSetName}</Descriptions.Item>
      <Descriptions.Item label="数据集类型"> {dataSetType}</Descriptions.Item>
      <Descriptions.Item label="上传用户姓名"> {uploadUserName}</Descriptions.Item>
      <Descriptions.Item label="数据集描述">{describe}</Descriptions.Item>
    </Descriptions>
  );
};

const StepResult: React.FC<{
  onFinish: () => Promise<void>;
}> = (props: any) => {
  return (
    <Result
      status="success"
      title="操作成功"
      subTitle="快去使用试试吧"
      extra={
        <>
          <Button type="primary" onClick={props.onFinish}>
            再传一个
          </Button>
          <Button>查看数据集库</Button>
        </>
      }
      className={styles.result}
    >
      {props.children}
    </Result>
  );
};

const FormStepForm: React.FC<Record<string, any>> = () => {
  const [stepData, setStepData] = useState<StepDataType>({
    dataSetName: 'Kitti数据集',
    receiverAccount: 'test@example.com',
    uploadUserName: 'Aldno',
    describe: '7200桢点云数据',
    dataSetType: '点云',
  });
  const [current, setCurrent] = useState(0);
  const formRef = useRef<FormInstance>();
  const [fileflodSwitch, setFileflodSwitch] = useState(false);

  const props: UploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  };

  const onSwitchChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    setFileflodSwitch(checked);
  };

  return (
    <PageContainer content="上传已有的或自己构建的数据集。">
      <Card bordered={false}>
        <StepsForm
          current={current}
          onCurrentChange={setCurrent}
          submitter={{
            render: (subprops: any, dom: any) => {
              if (subprops.step === 2) {
                return null;
              }
              return dom;
            },
          }}
        >
          <StepsForm.StepForm<StepDataType>
            formRef={formRef}
            title="填写数据集基本信息"
            initialValues={stepData}
            onFinish={async (values) => {
              setStepData(values);
              return true;
            }}
          >
            <ProFormSelect
              label="数据集名称"
              width="md"
              name="dataSetName"
              rules={[{ required: true, message: '请选择数据集名称' }]}
              valueEnum={{
                Kitti: 'Kitti数据集',
                nuScenes: 'nuScenes数据集',
                Waymo_Open_Dataset: 'Waymo数据集',
              }}
            />

            <ProForm.Group title="数据集类型" size={8}>
              <ProFormSelect
                name="dataSetType"
                rules={[{ required: true, message: '请选择付款账户' }]}
                valueEnum={{
                  pointcloud: '点云',
                  cinema: '相机',
                  multimodal: '多模态',
                }}
              />
            </ProForm.Group>
            <ProFormText
              label="上传用户id"
              width="md"
              name="uploadUserName"
              rules={[{ required: true, message: '请输入收款人姓名' }]}
              placeholder="请输入收款人姓名"
            />
            <ProFormDigit
              label="数据集备注描述"
              name="describe"
              width="md"
              rules={[{ required: true, message: '数据集类型格式描述' }]}
              placeholder="请输入数据集类型格式描述"
            />
          </StepsForm.StepForm>

          <StepsForm.StepForm title="上传数据集文件">
            <div className={styles.result}>
              <Alert
                closable
                showIcon
                message="确认上传后,数据库将直接上传至云端,仅管理员有权限改动。"
                style={{ marginBottom: 24 }}
              />
              <StepDescriptions stepData={stepData} bordered />

              <Divider style={{ margin: '24px 0' }} />

              <Alert
                showIcon
                banner
                message={
                  <Marquee pauseOnHover gradient={false}>
                    是否开启支持文件夹上传
                  </Marquee>
                }
                style={{ marginBottom: 24 }}
              />

              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked={fileflodSwitch}
                onChange={onSwitchChange}
              />

              <Upload {...props} directory={fileflodSwitch}>
                <Button icon={<UploadOutlined />}>数据集上传(支持压缩包,文件夹)</Button>
              </Upload>
              <Divider style={{ margin: '24px 0' }} />
            </div>
          </StepsForm.StepForm>
          <StepsForm.StepForm title="新建数据集完成">
            <StepResult
              onFinish={async () => {
                setCurrent(0);
                formRef.current?.resetFields();
              }}
            >
              <StepDescriptions stepData={stepData} />
            </StepResult>
          </StepsForm.StepForm>
        </StepsForm>
        <Divider style={{ margin: '40px 0 24px' }} />
        <div className={styles.desc}>
          <h3>说明</h3>
          <h4>上传数据集到云端服务器</h4>
          <p>请认真填写数据集详细相关信息 </p>
        </div>
      </Card>
    </PageContainer>
  );
};

export default FormStepForm;
