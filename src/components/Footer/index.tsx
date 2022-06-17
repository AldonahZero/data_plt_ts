import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const defaultMessage = 'Multimodal Platform技术部出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Multimodal Platform',
          title: 'Multimodal Platform',
          href: 'https://github.com/AldonahZero/data_plt_ts',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/AldonahZero/data_plt_ts',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
