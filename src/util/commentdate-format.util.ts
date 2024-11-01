export const commentDateFormatter = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();

    const isToday = date.toDateString() === now.toDateString();
    const isYesterday = new Date(now.setDate(now.getDate() - 1)).toDateString() === date.toDateString();

    const formattedTime = date.toLocaleTimeString("en-US", {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

    if (isToday) {
        return `Today at ${formattedTime}`;
    } else if (isYesterday) {
        return `Yesterday at ${formattedTime}`;
    } else {
        const formattedDate = date.toLocaleDateString("en-US", {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
        return `${formattedDate} at ${formattedTime}`;
    }
};
