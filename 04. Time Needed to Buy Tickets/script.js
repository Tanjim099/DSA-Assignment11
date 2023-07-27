function timeRequiredToBuyTickets(tickets, k) {
    let step = 0;
    while (true) {
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i] == 0) {
                continue;
            }
            tickets[i]--;
            step++;
            if (i == k) {
                return step;
            }
        }
    }
}
const tickets = [2, 3, 2]
const k = 2;
console.log(timeRequiredToBuyTickets(tickets, k));