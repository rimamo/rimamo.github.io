'use client';

import Script from 'next/script';

interface OdooLivechatProps {
  channelId: number;
}

export default function OdooLivechat({ channelId }: OdooLivechatProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://odoo.rimamo.dev/im_livechat/loader/${channelId}`}
      />
      <Script
        strategy="lazyOnload"
        src="https://odoo.rimamo.dev/im_livechat/assets_embed.js"
      />
    </>
  );
}
