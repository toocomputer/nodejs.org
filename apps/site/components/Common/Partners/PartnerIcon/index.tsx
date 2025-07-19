import Skeleton from '@node-core/ui-components/Common/Skeleton';
import type { ComponentProps, FC } from 'react';
import { cloneElement } from 'react';

import type { Partners } from '#site/types';

// import Link from '#site/components/Link';
import style from './index.module.css';
import Button from '../../Button';

type ParnetsIconProps = Partners & ComponentProps<typeof Skeleton>;

const PartnersIcon: FC<ParnetsIconProps> = ({ href, logo, loading }) => {
  return (
    <Skeleton loading={loading} className="h-12 w-12 p-1">
      <Button kind="secondary" href={href} className={style.partnerIcon}>
        {cloneElement(logo, {
          className: 'h-7 w-auto',
          width: 'auto',
          height: '28px',
        })}
      </Button>
    </Skeleton>
  );
};

export default PartnersIcon;
