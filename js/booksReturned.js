$(document).ready(function () {
    const table = $('#booksReturnedTable').DataTable();

    // Tìm kiếm sách
    $('#searchBook').on('keyup', function () {
        table.search(this.value).draw();
    });

    // Lọc theo ngày trả
    $('#dateFilter').on('change', function () {
        const date = this.value;
        table.columns(3).search(date).draw();
    });

    // Xử lý sự kiện chỉnh sửa
    $('#booksReturnedTable').on('click', '.edit-btn', function () {
        const row = $(this).closest('tr');
        const data = table.row(row).data();
        // Logic chỉnh sửa thông tin (mở modal hoặc hiển thị form)
    });

    // Xóa sách khỏi danh sách
    $('#booksReturnedTable').on('click', '.delete-btn', function () {
        const row = $(this).closest('tr');
        if (confirm('Are you sure you want to delete this record?')) {
            table.row(row).remove().draw();
            updateRowNumbers(table);
        }
    });
    // Hàm cập nhật lại số thứ tự ID
    function updateRowNumbers(table) {
        table.rows().every(function (rowIdx, tableLoop, rowLoop) {
          this.cell(rowIdx, 0).data(rowIdx + 1); // Cập nhật lại ID cho cột "ID"
        });
        table.draw(false);
    }
});
$(document).ready(function () {
    const table = $('#booksReturnedTable').DataTable();
  
    // Xử lý sự kiện khi nhấn nút "Edit"
    $('#booksReturnedTable').on('click', '.edit-btn', function () {
      const row = $(this).closest('tr'); // Lấy dòng hiện tại
      const data = table.row(row).data(); // Lấy dữ liệu từ dòng
  
      // Điền dữ liệu vào modal
      $('#editBookTitle').val(data[1]); // Title
      $('#editBookAuthor').val(data[2]); // Author
      $('#editReturnDate').val(data[3]); // Return Date
      $('#editBorrowerName').val(data[4]); // Borrower
  
      // Hiển thị modal
      $('#editBookReturnedModal').modal('show');
  
      // Khi lưu thay đổi
      $('#editBookReturnedForm').on('submit', function (e) {
        e.preventDefault();
  
        // Lấy dữ liệu đã chỉnh sửa từ form
        const updatedTitle = $('#editBookTitle').val();
        const updatedAuthor = $('#editBookAuthor').val();
        const updatedReturnDate = $('#editReturnDate').val();
        const updatedBorrowerName = $('#editBorrowerName').val();
  
        // Cập nhật lại dữ liệu dòng trong DataTable
        table.row(row).data([
          data[0], // ID không đổi
          updatedTitle,
          updatedAuthor,
          updatedReturnDate,
          updatedBorrowerName,
          `<button class="btn btn-danger btn-sm delete-btn">Delete</button>
           <button class="btn btn-warning btn-sm edit-btn">Edit</button>`
        ]).draw();
  
        // Đóng modal
        $('#editBookReturnedModal').modal('hide');
      });
    });
  });
  