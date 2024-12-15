
$(document).ready(function () {
    const table = $('#bookTable').DataTable();
  
    // Mở modal khi nhấn nút "Add Book"
    $('#addBookBtn').on('click', function () {
      $('#addBookModal').modal('show');
      $('#addBookModalLabel').text('Add New Book'); // Tiêu đề modal khi thêm
      $('#addBookForm')[0].reset(); // Reset form
      $('#addBookForm').data('edit-mode', false); // Chế độ thêm mới
    });
  
    // Khi gửi form, thêm sách mới vào bảng
    $('#addBookForm').on('submit', function (e) {
      e.preventDefault(); // Ngừng hành động mặc định của form
  
      const title = $('#bookTitle').val();
      const author = $('#bookAuthor').val();
      const year = $('#bookYear').val();
      const genre = $('#bookGenre').val();
  
      // Thêm sách mới vào bảng
      table.row.add([
        table.rows().count() + 1,  // Tự động tính toán ID
        title,
        author,
        year,
        genre,
        `<button class="btn btn-danger btn-sm delete-btn">Delete</button> 
         <button class="btn btn-warning btn-sm edit-btn">Edit</button>` // Nút Edit
      ]).draw(false);
  
      // Đóng modal
      $('#addBookModal').modal('hide');
      $('#addBookForm')[0].reset(); // Reset form sau khi thêm
    });
  
    // Xử lý sự kiện sửa sách khi nhấn nút "Edit"
    $('#bookTable').on('click', '.edit-btn', function () {
      const row = $(this).closest('tr');
      const data = table.row(row).data();
  
      // Mở modal và điền dữ liệu vào form
      $('#editBookTitle').val(data[1]);
      $('#editBookAuthor').val(data[2]);
      $('#editBookYear').val(data[3]);
      $('#editBookGenre').val(data[4]);
  
      // Đặt dữ liệu row vào modal để sử dụng khi chỉnh sửa
      $('#editBookForm').data('edit-mode', true);
      $('#editBookForm').data('row', row);
  
      $('#editBookModal').modal('show');
      $('#editBookModalLabel').text('Edit Book'); // Tiêu đề modal khi sửa
    });
  
    // Khi gửi form sửa sách
    $('#editBookForm').on('submit', function (e) {
      e.preventDefault(); // Ngừng hành động mặc định của form
  
      const title = $('#editBookTitle').val();
      const author = $('#editBookAuthor').val();
      const year = $('#editBookYear').val();
      const genre = $('#editBookGenre').val();
  
      // Chỉnh sửa sách hiện tại
      const row = $('#editBookForm').data('row');
      table.row(row).data([
        row.index() + 1,  // Cập nhật lại ID
        title,
        author,
        year,
        genre,
        `<button class="btn btn-danger btn-sm delete-btn">Delete</button> 
         <button class="btn btn-warning btn-sm edit-btn">Edit</button>`  // Nút Edit
      ]).draw();
  
      // Đóng modal
      $('#editBookModal').modal('hide');
    });
  
    // Xử lý sự kiện xóa sách khi nhấn nút "Xóa"
    $('#bookTable').on('click', '.delete-btn', function () {
      const row = $(this).closest('tr');
      if (confirm('Are you sure you want to delete this book?')) {
        table.row(row).remove().draw(); // Xóa hàng khỏi bảng
        updateRowNumbers(table); // Cập nhật lại số thứ tự ID
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

  