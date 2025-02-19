import { useState } from 'react';

const FAQSection = () => {
    const [openDetails, setOpenDetails] = useState<number | null>(null);

    const toggleDetails = (index: number) => {
        setOpenDetails(openDetails === index ? null : index);
    };

    return (
        <div className="h-screen">
            <div className="w-full max-w-3xl px-2 mx-auto py-12 dark:bg-transparent dark:text-gray-200">
                <h3 className="mt-3 text-xl font-bold text-gray-800 md:text-2xl dark:text-gray-100">
                    Frequently Asked Questions
                </h3>
                <div className="grid max-w-5xl mx-auto mt-6 divide-y divide-gray-200 dark:divide-gray-700">
                    {faqData.map((item, index) => (
                        <details
                            key={index}
                            className="group py-4"
                            open={openDetails === index}
                            onClick={() => toggleDetails(index)}
                        >
                            <summary className="flex items-center justify-between font-medium list-none cursor-pointer">
                                <span>{item.question}</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height="24"
                                        shape-rendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        className="dark:stroke-gray-400"
                                    >
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="mt-3 text-gray-600 dark:text-gray-300">
                                {item.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;

const faqData = [
    {
        question: 'Is TechSupportPro free to use?',
        answer: 'Yes! You can access our basic support services for free. However, we also offer premium plans with additional features.',
    },
    {
        question: 'Does TechSupportPro have a community forum?',
        answer: (
            <>
                Absolutely! Our community forum allows users to ask questions, share solutions, and collaborate on various tech issues.{' '}
                <a href="/forum">TechSupportPro - Forum</a>
            </>
        ),
    },
    {
        question: 'What kind of support services does TechSupportPro provide?',
        answer: 'We offer a wide range of services, including tech troubleshooting, software installations, network setup assistance, and device optimization. Our support covers both home users and businesses.',
    },
    {
        question: 'How can I save my support tickets for future reference?',
        answer: 'After logging into your account, you can view and save your support tickets under the "My Tickets" section of your dashboard.',
    },
    {
        question: 'How do I get in touch with TechSupportPro for urgent assistance?',
        answer: 'You can reach us through our 24/7 live chat or call our support hotline for urgent technical assistance.',
    },
];
