import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  const [selectedSection, setSelectedSection] = useState(
    "Giới thiệu nhà thuốc"
  );

  // Định nghĩa kiểu cho sectionsContent để tránh lỗi
  const sectionsContent: { [key: string]: JSX.Element } = {
    "Giới thiệu nhà thuốc": (
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          I. Về chúng tôi
        </h2>
        <div className="p-4 bg-gray-100 rounded-lg shadow-inner mb-6">
          <blockquote className="text-gray-700 italic">
            Trực thuộc Công ty cổ phần bán lẻ kỹ thuật số FPT – thành viên Tập
            đoàn FPT, hệ thống Nhà thuốc FPT Long Châu là một trong những chuỗi
            bán lẻ dược phẩm uy tín tại Việt Nam. Với hơn 1000 Nhà thuốc tại hơn
            63 tỉnh thành (cuối năm 2022), FPT Long Châu chuyên cung cấp đa dạng
            các loại thuốc kê đơn, không kê đơn, các sản phẩm thực phẩm chức
            năng, trang thiết bị y tế, dược mỹ phẩm và nhiều sản phẩm chăm sóc
            sức khoẻ, tiêu dùng hàng ngày,....
          </blockquote>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          II. Sứ mệnh
        </h2>
        <p className="text-gray-700 mb-6">
          Hệ thống Nhà thuốc FPT Long Châu luôn mong muốn chăm sóc, phục vụ sức
          khỏe cộng đồng với chất lượng tốt nhất và giá cả hợp lý.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          III. Giá trị cốt lõi
        </h2>
        <p className="typography-caption paragraph-padding">
          <strong className="font-semibold text-gray-700">
            {" "}
            1. Chất lượng tốt - Uy tín hàng đầu
          </strong>
        </p>
        <p className="text-gray-700 mb-6">
          Tất cả các Nhà thuốc trực thuộc hệ thống đều đạt chuẩn Thực hành thuốc
          tốt – GPP, với đội ngũ dược sĩ có chuyên môn và giàu kinh nghiệm.
        </p>
        <br />
        <p className="text-gray-700 mb-6">
          Cam kết tư vấn cho khách hàng theo tiêu chí 4 đúng:{" "}
        </p>
        <ul>
          <li className="text-gray-700">* Đúng thuốc</li>
          <br />
          <li className="text-gray-700">* Đúng liều</li>
          <br />
          <li className="text-gray-700">* Đúng cách</li>
          <br />
          <li className="text-gray-700">* Đúng giá</li>
        </ul>
        <br />
        <p className="text-gray-700 mb-6">
          Tất cả thuốc và sản phẩm tại chuỗi nhà thuốc FPT Long Châu đều được
          nhập từ chính hãng, được kiểm soát chất lượng theo quy trình chặt chẽ
          và bán đúng với giá niêm yết.{" "}
        </p>
      </div>
    ),
    "Chính sách bảo mật": (
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          1. Mục đích, phạm vi thu thập thông tin
        </h2>
        <p className="text-gray-700">
          Nhà thuốc Long Châu chỉ thu thập thông tin liên lạc cần thiết để thực
          hiện giao dịch giữa website với khách hàng mà không lấy thêm thông tin
          gì khác. Thông tin của khách hàng sẽ chỉ được lưu lại khi khách hàng
          tạo tài khoản và đăng nhập với tài khoản của mình. Nhà thuốc Long Châu
          thu thập và sử dụng thông tin cá nhân của khách hàng với mục đích phù
          hợp và hoàn toàn tuân thủ theo pháp luật. Nhà thuốc Long Châu cam kết
          không chia sẻ hay sử dụng thông tin cá nhân của khách hàng cho một bên
          thứ 3 nào khác với mục đích lợi nhuận. Thông tin của khách hàng sẽ chỉ
          được sử dụng trong nội bộ Nhà thuốc Long Châu. Khi cần thiết, chúng
          tôi có thể sử dụng những thông tin này để liên hệ trực tiếp với khách
          hàng dưới các hình thức như: gửi thư, đơn đặt hàng, thư cảm ơn. Khách
          hàng có thể nhận được thư định kỳ cung cấp thông tin sản phẩm, dịch vụ
          mới, thông tin về các chương trình khuyến mãi. Khi khách hàng đăng kí
          trên website nhathuoclongchau.com.vn, những thông tin chúng tôi thu
          thập bao gồm:
        </p>
        <br />
        <p className="typography-caption paragraph-padding">
          <strong className="font-semibold text-gray-700">
            Tên - Địa chỉ giao hàng - Số điện thoại - Ngày sinh - Giới tính -
            Những thông tin khác (nếu có).
          </strong>
        </p>
        <br />
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          2. Phạm vi sử dụng thông tin
        </h2>

        <p className="text-gray-700">
          Những thông tin trên chỉ được sử dụng cho những mục đích sau đây:
        </p>
        <br />
        <p className="text-gray-700">
          Giao hàng cho các đơn hàng được đặt mua trên website
          nhathuoclongchau.com.vn{" "}
        </p>
        <br />
        <p className="text-gray-700">
          Thông báo giao hàng và hỗ trợ khách hàng{" "}
        </p>
        <p className="text-gray-700">Cung cấp thông tin sản phẩm </p>
        <p className="text-gray-700">
          Xử lý đơn đặt hàng và cung cấp dịch vụ của chúng tôi theo yêu cầu của
          khách hàng{" "}
        </p>
        <p className="text-gray-700">
          Chia sẻ cho dịch vụ chuyển phát nhanh để giao hàng{" "}
        </p>
      </div>
    ),
    "Quy chế hoạt động website": (
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          I. Nguyên tắc chung
        </h2>
        <p className="text-gray-700">
          Website thương mại điện tử nhathuoclongchau.com.vn do Công ty Cổ phần
          dược phẩm FPT Long Châu (“Công ty”) thực hiện hoạt động và vận hành.
          Đối tượng phục vụ là tất cả khách hàng trên 63 tỉnh thành Việt Nam có
          nhu cầu mua hàng nhưng không có thời gian đến shop hoặc đặt trước để
          khi đến shop là đảm bảo có hàng.
        </p>
        <br />
        <p className="text-gray-700">
          Sản phẩm được kinh doanh tại https://nhathuoclongchau.com.vn phải đáp
          ứng đầy đủ các quy định của pháp luật, không bán hàng nhái, hàng không
          rõ nguồn gốc, hàng xách tay.
        </p>
        <br />
        <p className="text-gray-700">
          Hoạt động mua bán tại https://nhathuoclongchau.com.vn phải được thực
          hiện công khai, minh bạch, đảm bảo quyền lợi của người tiêu dùng.
        </p>
        <br />
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          II. Quy định chung
        </h2>
        <br />
        <p className="text-gray-700">Tên Miền website Thương mại Điện tử:</p>
        <br />
        <p className="text-gray-700">
          Website thương mại điện tử https://nhathuoclongchau.com.vn do Công ty
          Cổ phần dược phẩm FPT Long Châu phát triển với tên miền giao dịch là:
          https://nhathuoclongchau.com.vn sau đây gọi tắt là:
          “nhathuoclongchau.com.vn”.
        </p>
        <br />
        <p className="text-gray-700">Định nghĩa chung: </p>
        <br />
        <p className="text-gray-700">
          Người bán là Công ty Công ty Cổ phần dược phẩm FPT Long Châu.{" "}
        </p>
        <br />
        <p className="text-gray-700">
          Người mua là công dân Việt Nam trên khắp 63 tỉnh thành. Người mua có
          quyền đăng ký tài khoản hoặc không cần đăng ký để thực hiện giao dịch.{" "}
        </p>
        <br />
        <p className="text-gray-700">
          Thành viên là bao gồm cả người mua và người tham khảo thông tin, thảo
          luận tại website.
        </p>
        <br />
        <p className="text-gray-700">
          Nội dung bản Quy chế này tuân thủ theo các quy định hiện hành của Việt
          Nam. Thành viên khi tham gia website TMĐT nhathuoclongchau.com.vn phải
          tự tìm hiểu trách nhiệm pháp lý của mình đối với luật pháp hiện hành
          của Việt Nam và cam kết thực hiện đúng những nội dung trong Quy chế
          này.{" "}
        </p>
        <br />
      </div>
    ),
    "Chính sách nội dung": (
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          1. Thông báo miễn trừ trách nhiệm
        </h2>
        <p className="text-gray-700">
          Tất cả các sản phẩm bán tại nhà thuốc Long Châu đều có mô tả chi tiết.
          Nhà thuốc sẽ cung cấp thông tin về sản phẩm như ảnh, giấy phép kinh
          doanh, thành phần, tác dụng và chỉ định sử dụng. Mặc dù chúng tôi lựa
          chọn và cung cấp thông tin từ các trang web đáng tin cậy và chính
          thống, có độ chính xác cao, nhưng bạn nên coi đó chỉ là tài liệu tham
          khảo.
        </p>
        <br />
        <p className="text-gray-700">
          Nhà thuốc Long Châu muốn cung cấp thông tin đầy đủ về thành phần của
          các loại thuốc. Vì vậy, chúng tôi tổng hợp các thông tin từ Dược thư
          quốc gia hay hướng dẫn sử dụng được Cục quản lý Dược phê duyệt. Chúng
          tôi sẽ liên tục cập nhật thông tin mới nhất, vì nó có thể thay đổi
          theo thời gian. Do đó, trước khi sử dụng, bạn nên đọc kỹ bảng thành
          phần được cung cấp bởi nhà sản xuất.
        </p>
        <br />
        <p className="text-gray-700">
          Mục tiêu chúng tôi là cung cấp cho bạn thông tin hiện tại và phù hợp
          nhất. Tuy nhiên, vì thuốc có thể tương tác, tác dụng phụ khác nhau ở
          mỗi người, chúng tôi không thể đảm bảo rằng thông tin này bao gồm tất
          cả các tương tác và tác dụng phụ có thể. Thông tin này không thay thế
          cho lời khuyên y tế. Luôn luôn nói chuyện với nhà cung cấp dịch vụ y
          tế và chăm sóc sức khỏe của bạn để được tư vấn kỹ về các tương tác có
          thể xảy ra với tất cả các loại thuốc hay các sản phẩm không phải là
          thuốc (thực phẩm chức năng, thực phẩm dinh dưỡng,...) mà bạn đang
          dùng.
        </p>
        <br />
        <p className="text-gray-700">
          Nhà thuốc Long Châu có thể sửa đổi hoặc bổ sung thông tin mà không báo
          trước. Công dụng và hiệu quả điều trị của một sản phẩm có thể thay
          đổi. Thậm chí, sản phẩm có thể có hiệu quả với người này nhưng không
          hiệu quả với người khác. Chúng tôi không chịu trách nhiệm đối với bất
          kỳ thông tin chưa chính xác nào hoặc việc sử dụng thuốc mà không có ý
          kiến của bác sĩ, chỉ dựa trên thông tin do nhà thuốc cung cấp.
        </p>
        <br />
        <p className="text-gray-700">
          Tất cả nội dung gồm văn bản, hình ảnh, video và các tài nguyên khác
          trên website nhathuoclongchau.com.vn không được coi là một sự thay thế
          cho lời khuyên y tế, cũng như chẩn đoán hoặc điều trị từ các bác sĩ.
          Các thông tin trên website chỉ nên coi như tài liệu tham khảo, không
          dùng các thông tin này để “chẩn đoán” hoặc “điều trị” cho các vấn đề
          sức khỏe cũng như các tình trạng y tế khác.{" "}
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          2. Góp ý nội dung
        </h2>
        <p className="text-gray-700">
          Chúng tôi luôn cố gắng chọn lọc và cung cấp thông tin từ các nguồn
          đáng tin cậy, nhưng không tránh khỏi khả năng có thông tin chưa thật
          sự chính xác. Nếu bạn phát hiện bất kỳ thông tin không chính xác nào
          hoặc bạn có bất kỳ góp ý nào về thông tin mà chúng tôi cung cấp, rất
          mong bạn liên hệ với chúng tôi để chúng tôi có thể sửa đổi và cập nhật
          thông tin đó.
        </p>
      </div>
    ),
  };

  return (
    <>
      <Header />
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto flex">
          {/* Sidebar bên trái */}
          <aside className="w-1/4 pr-8">
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-700 mb-4">
                Bài viết trong danh mục
              </h3>
              <ul className="space-y-2">
                {Object.keys(sectionsContent).map((item, index) => (
                  <li key={index}>
                    <button
                      className={`text-left w-full text-blue-600 hover:underline ${
                        selectedSection === item ? "font-bold" : ""
                      }`}
                      onClick={() => setSelectedSection(item)}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Phần nội dung bên phải */}
          <main className="w-3/4 bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              {selectedSection}
            </h1>
            {/* Hiển thị nội dung tương ứng với mục được chọn */}
            {sectionsContent[selectedSection]}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
