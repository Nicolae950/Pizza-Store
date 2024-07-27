using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PizzaStore.Migrations
{
    /// <inheritdoc />
    public partial class AddTypeOfProductForeignKeyToProductTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Products_Id_Type",
                table: "Products",
                column: "Id_Type");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Types_Id_Type",
                table: "Products",
                column: "Id_Type",
                principalTable: "Types",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_Types_Id_Type",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Products_Id_Type",
                table: "Products");
        }
    }
}
