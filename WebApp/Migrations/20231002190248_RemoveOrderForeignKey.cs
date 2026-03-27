using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PizzaStore.Migrations
{
    /// <inheritdoc />
    public partial class RemoveOrderForeignKey : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Carts_Orders_Id_Order",
                table: "Carts");

            migrationBuilder.DropIndex(
                name: "IX_Carts_Id_Order",
                table: "Carts");

            migrationBuilder.AlterColumn<double>(
                name: "Final_Price",
                table: "Orders",
                type: "float",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<float>(
                name: "Final_Price",
                table: "Orders",
                type: "real",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");

            migrationBuilder.CreateIndex(
                name: "IX_Carts_Id_Order",
                table: "Carts",
                column: "Id_Order");

            migrationBuilder.AddForeignKey(
                name: "FK_Carts_Orders_Id_Order",
                table: "Carts",
                column: "Id_Order",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
