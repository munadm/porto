import Link from 'next/link';

export default NavHeader => {
    return (
        <div className="sticky grid grid-cols-2 top-0 z-20 py-2 bg-white md:py-6 md:mb-6 md:grid-rows-2 dark:bg-black">
            <div className=" px-4 mx-auto lg:max-w-4xl items-center justify-between">
                    <p
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                    >
                        Hey how's it going?
                    </p>

            </div>
            <div className=" px-4 mx-auto lg:max-w-4xl items-right justify-between">
                <Link href="mailto: contact@munadmahinoor.com">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                    >
                        Contact Me
                    </a>
                </Link>
            </div>
        </div>
    )
}