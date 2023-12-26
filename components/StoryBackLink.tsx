import { useRouter } from "next/router";
import cn from 'classnames'

const BackLink = () => {
	const router = useRouter();
	return <div className={cn('_back', router.asPath === '/terminal' && '_back_terminal')} onClick={() => router.back()}></div>
}

export default BackLink