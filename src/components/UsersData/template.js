import { formateDate } from '@/mixins/utils';
import data from '@/mixins/data';

export default (usersData) => {
  const headers = data.headersName.map((header) => `<th>${header}</th>`);
  const tableHeader = `<thead><tr>${headers.join(' ')}</tr></thead>`;
  const tableBody = usersData.map((user) => (
    `<tr class="users-data__row">
      <td class="users-data__name">${user.name.first} ${user.name.last}</td>
      <td>
        <div class="tooltip">
          <img src="${user.picture.thumbnail}" alt="user-${user.name.first}-${user.name.last}"/>
          <img class="tooltip-image" src="${user.picture.large}" alt="user-${user.name.first}-${user.name.last}-large"/>
        </div>
      </td>
      <td>${user.location.state} ${user.location.city}</td>
      <td>${user.email}</td>
      <td>${user.phone}</td>
      <td>${formateDate(new Date(user.registered.date))}</td>
    </tr>`)).join(' ');
  const table = `<table class="users-data__table">${tableHeader}<tbody>${tableBody}</tbody></table>`;

  return `<div class="users-data">${table}</div>`;
};
