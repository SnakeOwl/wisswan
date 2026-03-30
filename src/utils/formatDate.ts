/**
 * Форматирует дату в числовой вид (ДД.ММ.ГГГГ)
 * @param dateString - ISO строка даты
 * @param showTime - Выводить ли время (ЧЧ:ММ)
 */
export const formatDate = (
	dateString: string | null,
	showTime: boolean = false
): string => {
	if (dateString == null)
		return '';

	const date = new Date(dateString);

	if (isNaN(date.getTime())) return '—';

	const options: Intl.DateTimeFormatOptions = {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		...(showTime && {
			hour: '2-digit',
			minute: '2-digit',
		}),
	};

	return new Intl.DateTimeFormat('ru-RU', options).format(date);
};
