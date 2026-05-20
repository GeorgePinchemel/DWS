/**
 * Badge aberto/fechado com horário de Salvador (America/Bahia).
 * Funcionamento: Ter–Dom 17h–23h (inclusive até 23:59).
 */
(function initStatusBadge() {
    const badge = document.getElementById('status-badge');
    if (!badge) return;

    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Bahia',
        weekday: 'short',
        hour: 'numeric',
        hour12: false
    });

    const parts = formatter.formatToParts(new Date());
    const weekday = parts.find((p) => p.type === 'weekday')?.value ?? '';
    const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? 0);

    const isMonday = weekday === 'Mon';
    const isOpen = !isMonday && hour >= 17 && hour <= 23;

    if (isOpen) {
        badge.textContent = 'Aberto agora';
        badge.className = 'status-badge status-badge--open';
        badge.setAttribute('aria-label', 'Restaurante aberto agora');
        return;
    }

    let closedMsg = 'Fechado por hoje';
    if (isMonday) {
        closedMsg = 'Fechado às segundas';
    } else if (hour < 17) {
        closedMsg = 'Abre às 17h';
    }

    badge.textContent = closedMsg;
    badge.className = 'status-badge status-badge--closed';
    badge.setAttribute('aria-label', `Restaurante fechado: ${closedMsg}`);
})();
