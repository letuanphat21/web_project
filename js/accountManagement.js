$(document).ready(function () {
    const table = $('#accountTable').DataTable();
  
    // Mở modal khi nhấn nút "Add Account"
    $('#addAccountBtn').on('click', function () {
      $('#addAccountModal').modal('show');
      $('#addAccountModalLabel').text('Add New Account');
      $('#addAccountForm')[0].reset();
      $('#addAccountForm').data('edit-mode', false);
    });
  
    // Khi gửi form, thêm tài khoản mới vào bảng
    $('#addAccountForm').on('submit', function (e) {
      e.preventDefault();
  
      const username = $('#accountUsername').val();
      const email = $('#accountEmail').val();
  
      // Thêm tài khoản mới vào bảng
      table.row.add([
        table.rows().count() + 1,
        username,
        email,
        `<button class="btn btn-danger btn-sm delete-btn">Delete</button> 
         <button class="btn btn-warning btn-sm edit-btn">Edit</button>`
      ]).draw(false);
  
      $('#addAccountModal').modal('hide');
      $('#addAccountForm')[0].reset();
    });
  
    // Xử lý sự kiện sửa tài khoản
    $('#accountTable').on('click', '.edit-btn', function () {
      const row = $(this).closest('tr');
      const data = table.row(row).data();
  
      $('#editAccountUsername').val(data[1]);
      $('#editAccountEmail').val(data[2]);
  
      $('#editAccountForm').data('edit-mode', true);
      $('#editAccountForm').data('row', row);
  
      $('#editAccountModal').modal('show');
      $('#editAccountModalLabel').text('Edit Account');
    });
  
    // Khi gửi form sửa tài khoản
    $('#editAccountForm').on('submit', function (e) {
      e.preventDefault();
  
      const username = $('#editAccountUsername').val();
      const email = $('#editAccountEmail').val();
  
      const row = $('#editAccountForm').data('row');
      table.row(row).data([
        row.index() + 1,
        username,
        email,
        `<button class="btn btn-danger btn-sm delete-btn">Delete</button> 
         <button class="btn btn-warning btn-sm edit-btn">Edit</button>`
      ]).draw();
  
      $('#editAccountModal').modal('hide');
    });
  
    // Xử lý sự kiện xóa tài khoản
    $('#accountTable').on('click', '.delete-btn', function () {
      const row = $(this).closest('tr');
      if (confirm('Are you sure you want to delete this account?')) {
        table.row(row).remove().draw();
        updateRowNumbers(table);
      }
    });
  
    function updateRowNumbers(table) {
      table.rows().every(function (rowIdx, tableLoop, rowLoop) {
        this.cell(rowIdx, 0).data(rowIdx + 1);
      });
      table.draw(false);
    }
});
  