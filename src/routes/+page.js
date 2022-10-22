import EmailIcon from '@iconify-icons/mdi/email';
import FacebookIcon from '@iconify-icons/mdi/facebook';
import GithubIcon from '@iconify-icons/mdi/github';
import TelegramIcon from '@iconify-icons/mdi/telegram';
import TwitterIcon from '@iconify-icons/mdi/twitter';

/** @type {import('./$types').PageLoad} */
export async function load() {
	return {
		links: [
			{ color: '#4267b2', icon: FacebookIcon, href: 'https://facebook.com/yangszwei' },
			{ color: '#1da1f2', icon: TwitterIcon, href: 'https://twitter.com/yangszwei' },
			{ color: '#333', icon: GithubIcon, href: 'https://github.com/yangszwei' },
			{ color: '#08C', icon: TelegramIcon, href: 'https://t.me/yangszwei' },
			{ color: '#222', icon: EmailIcon, href: 'mailto:yangszwei@outlook.com' },
		],
	};
}
